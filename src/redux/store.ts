import { configureStore } from "@reduxjs/toolkit";

import inputsManagerReducer from "@/api/utils/inputManager/inputsManagerSlice";

export const store = configureStore({
  reducer: { inputsManager: inputsManagerReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
