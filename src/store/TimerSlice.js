import { createSlice } from "@reduxjs/toolkit";

const initialTimer = {
    hours: 0,
    minutes: 0,
    seconds: 0,
};

const TimerSlice = createSlice({
    name: "time",
    initialState: { initialTimer },
    reducers: {
        setTime: (state, action) => {
            state.hours = action.payload.hours;
            state.minutes = action.payload.minutes;
            state.seconds = action.payload.seconds;
        },
        clearTime: () => {
            return initialTimer;
        },
    },
});

export const { setTime, clearTime } = TimerSlice.actions;
export default TimerSlice;
