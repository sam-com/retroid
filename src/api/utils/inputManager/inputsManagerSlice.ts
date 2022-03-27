import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface inputsManagerState {
  focusContainerId: string | null;
}

const initialState: inputsManagerState = {
  focusContainerId: null,
};

const inputsManagerSlice = createSlice({
  name: "inputsManager",
  initialState,
  reducers: {
    toggleSidebarFocus(state) {
      const focusContainerId =
        state.focusContainerId === "sidebarId" ? null : "sidebarId";
      state.focusContainerId = focusContainerId;
    },
  },
});

export const { toggleSidebarFocus } = inputsManagerSlice.actions;
export default inputsManagerSlice.reducer;
