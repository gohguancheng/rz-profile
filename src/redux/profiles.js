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
    nextId: 5,
    selectedId: 1,
    editSelected: false,
  },
  reducers: {
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
    moveUp: (state, action) => {
      const index = state.profiles.findIndex((p) => p.id === action.payload);

      state.profiles = [
        ...state.profiles.slice(0, index - 1),
        state.profiles[index],
        state.profiles[index - 1],
        ...state.profiles.slice(index + 1),
      ];
    },
    moveDown: (state, action) => {
      const index = state.profiles.findIndex((p) => p.id === action.payload);

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
      state.selectedId =
        state.profiles[action.payload ? action.payload - 1 : 0].id;
    },
    rename: (state, action) => {
      const { index, newLabel } = action.payload;

      state.profiles = [
        ...state.profiles.slice(0, index),
        { ...state.profiles[index], label: newLabel },
        ...state.profiles.slice(index + 1),
      ];
    },
    add: (state) => {
      const update = [
        ...state.profiles,
        {
          id: state.nextId,
          label: "New Profile",
          type: "custom",
        },
      ];
      state.selectedId = state.nextId;
      state.nextId += 1;
      state.profiles = update;
    },
    setProfiles: (state, action) => {
      const { profiles, nextId, selectedId } = action.payload;
      state.profiles = profiles;
      state.nextId = nextId;
      state.selectedId = selectedId;
    },
    setEditSelected: (state, action) => {
      state.editSelected = action.payload;
    },
  },
});

export const {
  setSelectedId,
  moveUp,
  moveDown,
  del,
  rename,
  add,
  setProfiles,
  setEditSelected,
} = profilesSlice.actions;

export default profilesSlice.reducer;
