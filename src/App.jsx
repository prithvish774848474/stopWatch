import { useState, useEffect, useRef } from "react";
import './App.css';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  const timeID = useRef('');
  useEffect(() => {
    if (isActive)
      timeID.current = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timeID.current);
  }, [isActive]);

  const handleReset = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <div className="stopWatchContainer">
      <span className="stopWatch">
        {Math.floor(((time / 60) / 60) % 60).toString().padStart(2, '0')}
        <kbd className="timeDesignation">h</kbd> : {" "}
        {Math.floor((time / 60) % 60).toString().padStart(2, "0")}
        <kbd className="timeDesignation">m</kbd> :{" "}
        {Math.floor(time % 60).toString().padStart(2, "0")}
        <kbd className="timeDesignation">s</kbd>
      </span>
      <button
        type="button"
        className="controlButton start-stop"
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? "Stop" : "Start"}
      </button>
      <button
        type="button"
        className="controlButton reset"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
