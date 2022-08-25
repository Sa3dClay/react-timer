import "./App.css";
import { useSelector } from "react-redux";
import TimerInput from "./components/TimerInput";
import CountdownTimer from "./components/CountdownTimer";

function App() {
    const timer = useSelector((state) => state.timer);

    const TIMER_IN_MS =
        timer.hours * 60 * 60 * 1000 +
        timer.minutes * 60 * 1000 +
        timer.seconds * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterTimer = NOW_IN_MS + TIMER_IN_MS;

    return (
        <div className="App">
            <h1 className="text-center">Countdown Timer</h1>

            <TimerInput />
            {dateTimeAfterTimer > 0 && (
                <CountdownTimer targetDate={dateTimeAfterTimer} />
            )}
        </div>
    );
}

export default App;
