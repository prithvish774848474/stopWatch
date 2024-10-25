import { useState, useEffect, useRef } from "react";
import './tailwind.css';

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
    <div className="bg-transparent
    border-none
    rounded-2xl
    w-[75vw] md:w-[50vw]
    h-[90vh]
    flex flex-col
    justify-around
    items-center
    custom-container-box-shadow">
      <span className="w-[120%]
      h-[30%] md:h-[40%]
      text-4xl md:text-6xl lg:text-7xl
      text-sky-700
      font-sans
      bg-transparent
      border-none
      rounded-xl md:rounded-2xl
      flex flex-row
      justify-center
      items-center
      custom-stopwatch-box-shadow">
        {Math.floor((time / 60 / 60) % 60)
          .toString()
          .padStart(2, "0")}
        <span className="text-2xl">h</span> : &nbsp;
        {Math.floor((time / 60) % 60)
          .toString()
          .padStart(2, "0")}
        <span className="text-2xl">m</span> : &nbsp;
        {Math.floor(time % 60)
          .toString()
          .padStart(2, "0")}
        <span className="text-2xl">s</span>
        {/* time % 60 gives seconds
        (time / 60) % 60 gives minutes
        ((time / 60) / 60) % 60 gives hours
        number % 60 is in the range [0, 59] */}
      </span>
      <section className="flex flex-col md:flex-row
      justify-around
      items-center
      gap-4
      w-full
      h-[30%]">
        <button
          type="button"
          className="p-4 md:p-6
          text-2xl
          text-center
          text-amber-400
          font-mono
          font-bold
          italic
          bg-transparent
          rounded-[50%]
          border-2 border-amber-200 border-b-transparent
          hover:border-transparent hover:border-b-amber-200
          cursor-pointer custom-control-button-transition"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "Stop" : "Start"}
        </button>
        <button
          type="button"
          className="p-4 md:p-6
          text-2xl
          text-center
          text-rose-400
          font-mono
          font-bold
          italic
          bg-transparent
          rounded-[50%]
          border-2 border-rose-200 border-b-transparent
          hover:border-transparent hover:border-b-rose-200
          cursor-pointer custom-control-button-transition"
          onClick={handleReset}
        >
          Reset
        </button>
      </section>
    </div>
  );
}
