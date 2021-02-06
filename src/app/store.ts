import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import covidReducer from "../features/covid/covidSlice";
export const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
