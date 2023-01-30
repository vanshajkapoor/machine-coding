import React, { useRef, useState } from 'react';

const Stopwatch = () => {
  const [timer, setTimer] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const interval = useRef(null);

  const startTimer = () => {
    interval.current = setInterval(run, 1);
  };

  const pauseTimer = () => {
    clearInterval(interval.current);
  };

  let updatedMs = timer.ms,
    updatedS = timer.s,
    updatedM = timer.m,
    updatedH = timer.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTimer({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const resetTimer = () => {
    clearInterval(interval.current);
    setTimer({ ms: 0, s: 0, m: 0, h: 0 });
  };

  return (
    <>
      <div className="timer">{`${timer.h}:${timer.m}:${timer.s}:${timer.ms}`}</div>
      <div className="">
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
};

export default Stopwatch;
