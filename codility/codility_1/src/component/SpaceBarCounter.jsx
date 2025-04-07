import React, { useState, useEffect, useRef } from "react";

const SpacebarCounter = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [rate, setRate] = useState(0);
  const timerRef = useRef(null);

  // Handle spacebar press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault(); // Prevent default spacebar behavior (scrolling)
        if (!isRunning) {
          // Clear any existing interval
          if (timerRef.current) clearInterval(timerRef.current);

          // Reset counters
          setCount(0);
          setTime(0);
          setRate(0);
          setIsRunning(true);

          // Start new timer
          const startTime = Date.now();
          timerRef.current = setInterval(() => {
            setTime(((Date.now() - startTime) / 1000).toFixed(1));
          }, 100);
        }
        setCount((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  // Calculate taps per second
  useEffect(() => {
    if (time > 0) {
      setRate(count / time);
    }
  }, [count, time]);

  const reset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRunning(false);
    setCount(0);
    setTime(0);
    setRate(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Spacebar Counter</h1>
      <div style={{ fontSize: "24px", margin: "20px" }}>
        Press the spacebar as fast as you can!
      </div>
      <div style={{ fontSize: "48px", fontWeight: "bold" }}>{count}</div>
      <div style={{ fontSize: "24px" }}>Time: {time}s</div>
      <div style={{ fontSize: "24px" }}>Rate: {rate.toFixed(1)} taps/s</div>
      {isRunning && (
        <button
          onClick={reset}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default SpacebarCounter;
