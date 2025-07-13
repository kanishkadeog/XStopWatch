import React, { useState, useEffect } from 'react';

const XStopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div style={styles.container}>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime()}</p>
      <div style={styles.buttonGroup}>
        {!isRunning ? (
          <button onClick={() => setIsRunning(true)} style={styles.button}>Start</button>
        ) : (
          <button onClick={() => setIsRunning(false)} style={styles.button}>Stop</button>
        )}
        <button onClick={handleReset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '100px',
  },
  buttonGroup: {
    marginTop: '20px',
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default XStopwatch;
