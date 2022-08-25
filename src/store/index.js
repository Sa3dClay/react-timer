import { configureStore } from "@reduxjs/toolkit";
import TimerSlice from "./TimerSlice";

const store = configureStore({ reducer: { timer: TimerSlice.reducer } });

export default store;
