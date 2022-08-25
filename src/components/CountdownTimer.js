import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../hooks/useCountdown";

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Done!</span>
        </div>
    );
};

const ShowCounter = ({ hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <a href="/" className="countdown-link">
                <DateTimeDisplay
                    value={hours}
                    type={"Hours"}
                    isDanger={hours <= 1}
                />
                <p>:</p>
                <DateTimeDisplay
                    value={minutes}
                    type={"Mins"}
                    isDanger={minutes <= 5}
                />
                <p>:</p>
                <DateTimeDisplay
                    value={seconds}
                    type={"Seconds"}
                    isDanger={seconds <= 30}
                />
            </a>
        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [hours, minutes, seconds] = useCountdown(targetDate);

    if (hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />
        );
    }
};

export default CountdownTimer;
