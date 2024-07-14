import { useEffect } from "react";

export default function Timer(
  { isTimerRunning, time, setTime, setWpm, charIndex, setIsCompleted, correct }) {
  let intervalId;
  useEffect(() => {
    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 1) {
            setIsCompleted(true);
          } else {
            return prevTime - 0.5;
          }
        });
        const incorrectCount = correct.filter(v => v === false).length
        setWpm(time < 60 ? Math.floor(((charIndex-incorrectCount)/ 5) / ((60 - time) / 60)) : 0)
      }, 500)
    }
    return () => clearInterval(intervalId);
  }, [isTimerRunning, time])

  const minutes = Math.round(time / 120)
  const seconds = Math.floor(((time) % 60))
  return (
    <p className="stopwatch">
      {minutes.toString().padStart(1, '0')}:
      {seconds.toString().padStart(2, '0')}
    </p>
  );
}