import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "./profiles";
import appReducer from "./appState";

export default configureStore({
  reducer: {
    profiles: profilesReducer,
    appState: appReducer,
  },
});
