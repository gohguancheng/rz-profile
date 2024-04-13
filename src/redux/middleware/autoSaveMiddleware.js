import { localStorageKey } from "../../const";

const writeActionSubTypes = ["moveUp", "moveDown", "add", "rename", "del"];
const autoSaveMiddleware = (store) => (next) => (action) => {
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
  }

  return result;
};

export default autoSaveMiddleware;
