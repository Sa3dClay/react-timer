import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTime } from "../store/TimerSlice";

const TimeInput = () => {
    const dispatch = useDispatch();

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const startTimerHandler = (e) => {
        e.preventDefault();

        dispatch(
            setTime({
                days,
                hours,
                minutes,
                seconds,
            })
        );
    };

    return (
        <form className="text-center" onSubmit={startTimerHandler}>
            <input
                type="number"
                min="0"
                placeholder="days"
                onChange={(e) => setDays(e.target.value)}
            />
            <input
                type="number"
                min="0"
                placeholder="hours"
                onChange={(e) => setHours(e.target.value)}
            />
            <input
                type="number"
                min="0"
                placeholder="minutes"
                onChange={(e) => setMinutes(e.target.value)}
            />
            <input
                type="number"
                min="0"
                placeholder="seconds"
                onChange={(e) => setSeconds(e.target.value)}
            />
            <button type="submit">start</button>
        </form>
    );
};

export default TimeInput;
