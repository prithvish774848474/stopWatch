import { useState, useEffect } from "react";
import './App.css';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  function handleReset() {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  }
  useEffect(() => {
    let timeID;
    switch (isActive) {
      case true:
        timeID = setInterval(() => setSeconds(second => {
          if (second < 59)
            return (second + 1);
          else {
            setMinutes(minutes + 1);
            return 0;
          }
        }), 1000);
        break;
      case false:
        clearInterval(timeID);
        break;
      default:
        throw new Error("Invalid!");
    }
    return () => clearInterval(timeID);
  }, [isActive]);
  return (
    <div className="stopWatchContainer">
      <span className="stopWatch">
        {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}
      </span>
      <button type="button" className="controlButton start-stop" onClick={() => setIsActive(!isActive)}>
        {isActive ? "Stop" : "Start"}
      </button>
      <button type="button" className="controlButton reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
