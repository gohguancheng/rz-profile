import { configureStore } from "@reduxjs/toolkit";
import profilesReducer from "./profiles";

export default configureStore({
  reducer: {
    profiles: profilesReducer,
  },
});
