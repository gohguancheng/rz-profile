import { localStorageKey } from "../../const";
import axios from "axios";

const writeActionSubTypes = ["moveUp", "moveDown", "add", "rename", "del"];
const autoSaveMiddleware = (store) => (next) => async (action) => {
  const result = next(action);
  const actionSubType = action.type.split("/")[1];
  if (writeActionSubTypes.includes(actionSubType)) {
    const timeoutRef = store.getState().appState.timeoutRef;
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }

    const timeout = setTimeout(() => {
      // set back to null when timeout expires
      store.dispatch({ type: "appState/setTimeoutRef", payload: null });
    }, 3000);

    store.dispatch({ type: "appState/setTimeoutRef", payload: timeout });
  }

  // trigger autosave when timeout expires
  if (actionSubType === "setTimeoutRef" && action.payload === null) {
    const newState = store.getState();
    localStorage.setItem(localStorageKey, JSON.stringify(newState.profiles));

    const accessKey = process.env.REACT_APP_APIKEY;
    const binId = process.env.REACT_APP_BIN_ID || "661a1b9bacd3cb34a837a2a6"; // note: defaults will be deleted

    try {
      const bin = await axios.get(
        `https://api.jsonbin.io/v3/b/${binId}?meta=false`,
        {
          headers: {
            ["X-Access-Key"]: accessKey,
          },
        }
      );

      if (bin.data) {
        const res = await axios.put(
          `https://api.jsonbin.io/v3/b/${binId}?meta=false`,
          {
            profiles: newState.profiles.profiles,
          },
          {
            headers: {
              ["X-Access-Key"]: accessKey,
              ["Content-Type"]: "application/json",
            },
          }
        );
        console.log(`view your data at https://api.jsonbin.io/v3/b/${binId}`);
        if (!process.env.REACT_APP_BIN_ID) {
          console.log(
            "Note that this bin is shared and being updated by other users"
          );
        }
      }
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  return result;
};

export default autoSaveMiddleware;
