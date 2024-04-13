import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "./profiles";
import appReducer from "./appState";
import autoSaveMiddleware from "./middleware/autoSaveMiddleware";
import closePopupMiddleware from "./middleware/closePopupMiddleware";
import { localStorageKey } from "../const";

const loadFromLocalStorage = () => {
  let res = undefined;
  const localState = localStorage.getItem(localStorageKey);
  if (localState) {
    const profiles = JSON.parse(localState);
    if ("profiles" in profiles) {
      res = { profiles };
    } else {
      localStorage.removeItem(localStorageKey);
    }
  }
  return res;
};

const preloadedState = loadFromLocalStorage();

export default configureStore({
  reducer: {
    profiles: profilesReducer,
    appState: appReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(closePopupMiddleware, autoSaveMiddleware),
});
