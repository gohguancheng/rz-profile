import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "appState",
  initialState: {
    showPopup: false,
    textInput: "",
  },
  reducers: {
    setShowPopup: (state, action) => {
      state.showPopup = action.payload;
    },
    setTextInput: (state, action) => {
      state.textInput = action.payload;
    },
  },
});

export const { setShowPopup, setTextInput } = appSlice.actions;

export default appSlice.reducer;
