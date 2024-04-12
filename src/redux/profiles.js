import { createSlice } from "@reduxjs/toolkit";

export const profilesSlice = createSlice({
  name: "profiles",
  initialState: {
    profiles: [
      {
        id: 1,
        label: "Default",
        type: "default",
      },
      {
        id: 2,
        label: "Game",
        type: "game",
      },
      {
        id: 3,
        label: "Movie",
        type: "movie",
      },
      {
        id: 4,
        label: "Music",
        type: "music",
      },
    ],
    idCount: 4,
    selectedId: 1,
    editSelected: false,
  },
  reducers: {
    moveUp: (state, action) => {
      state.profiles = action.payload;
      const index = state.profiles.findIndex((p) => p.id);

      state.profiles = [
        ...state.profiles.slice(0, index - 1),
        state.profiles[index],
        state.profiles[index - 1],
        ...state.profiles.slice(index + 1),
      ];
    },
    moveDown: (state, action) => {
      state.profiles = action.payload;
      const index = state.profiles.findIndex((p) => p.id);

      state.profiles = [
        ...state.profiles.slice(0, index),
        state.profiles[index + 1],
        state.profiles[index],
        ...state.profiles.slice(index + 2),
      ];
    },
    del: (state, action) => {
      state.profiles = [
        ...state.profiles.slice(0, action.payload),
        ...state.profiles.slice(action.payload + 1),
      ];
      state.selectedId = state.profiles[action.payload - 1].id;
    },
    rename: (state, action) => {
      const { i, newLabel } = action.payload;

      state.profiles = [
        ...state.profiles.slice(0, i),
        { ...state.profiles[i], label: newLabel },
        ...state.profiles.slice(i + 1),
      ];
    },
    add: (state) => {
      const update = [
        ...state.profiles,
        {
          id: state.idCount,
          label: "New Profile",
          type: "custom",
        },
      ];
      state.idCount += 1;
      state.profiles = update;
      state.selectedId = update.id;
    },
    setProfiles: (state, action) => {
      const { profiles, idCount, selectedId } = action.payload;
      state.profiles = profiles;
      state.idCount = idCount;
      state.selectedId = selectedId;
    },
    setEditSelected: (state, action) => {
      state.editSelected = action.payload;
    },
  },
});

export const { moveUp, moveDown, del, rename, add } = profilesSlice.actions;

export default profilesSlice.reducer;
