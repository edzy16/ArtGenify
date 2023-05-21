// src/redux/reducers.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  // Define your state properties here
  // For example:
  prompt: string;
  generatedImage: string;
}

const initialState: AppState = {
  prompt: "",
  generatedImage: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPrompt: (state, action: PayloadAction<string>) => {
      state.prompt = action.payload;
    },
    setGeneratedImage: (state, action: PayloadAction<string>) => {
      state.generatedImage = action.payload;
    },
  },
});

export const { setPrompt, setGeneratedImage } = appSlice.actions;

export default appSlice.reducer;
