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
    toggleSidebarFocus(state, action: PayloadAction<boolean>) {
      const { focusContainerId } = state;

      if (focusContainerId || action.payload === false)
        state.focusContainerId = null;
      else state.focusContainerId = "sidebarId";
    },
  },
});

export const { toggleSidebarFocus } = inputsManagerSlice.actions;
export default inputsManagerSlice.reducer;
