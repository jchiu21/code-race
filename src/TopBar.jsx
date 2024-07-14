import Timer from './Timer'

export default function TopBar
  ({ desc, isTimerRunning, time, setTime, wpm, setWpm, charIndex, reset, setIsCompleted, correct }) {
  return (
    <div className="topBar">
      <p>{desc}</p>
      <p>WPM: {time <= 58 ? wpm : '--'}</p>
      <Timer
        isTimerRunning={isTimerRunning}
        time={time}
        setTime={setTime}
        setWpm={setWpm}
        charIndex={charIndex}
        setIsCompleted={setIsCompleted}
        correct={correct}
      />
      <button className="reset" onClick={() => reset()}>Reset</button>
      
    </div>
    
  )
}