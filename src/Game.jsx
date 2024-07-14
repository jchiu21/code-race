import './App.css'
import TypeInput from './TypeInput'
import CodeSnippet from './CodeSnippet'
import Results from './Results'
import { useState, useEffect } from "react"
import TopBar from './TopBar'

export default function Game({ codeSnippets }) {
  const [snippetIndex, setSnippetIndex] = useState(Math.floor(Math.random() * codeSnippets.length));
  const [inputLineText, setInputLineText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [time, setTime] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [wpmData, setWpmData] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [submittedText, setSubmittedText] = useState([]);

  const randomCode = codeSnippets[snippetIndex];
  const chars = randomCode.code.split("").filter(char => char !== '\n');;
  const lines = randomCode.code.split("\n");

  useEffect(() => {
    if (time !== 60 && time % 1 === 0) {
      setWpmData(prevData => [...prevData, wpm]);
    }
  }, [time]);

  const reset = () => {
    setIsCompleted(false);
    setIsTimerRunning(false);
    setSnippetIndex(Math.floor(Math.random() * codeSnippets.length));
    setTime(60);
    setLineIndex(0);
    setCharIndex(0);
    setWpm(0);
    setInputLineText("");
    setWpmData([]);
    setCorrect([]);
    setSubmittedText([]);
  }

  return (
    <div className="container">
      <div className="main">
        {!isCompleted && <TopBar
          desc={randomCode.desc}
          isTimerRunning={isTimerRunning}
          time={time}
          setTime={setTime}
          wpm={wpm}
          setWpm={setWpm}
          charIndex={charIndex}
          reset={reset}
          setIsCompleted={setIsCompleted}
          correct={correct}
        />}

        {!isCompleted && <CodeSnippet
          lines={lines}
          lineIndex={lineIndex}
          inputLineText={inputLineText}
          correct={correct}
        />}

        {isCompleted && <Results
          wpm={wpm}
          wpmData={wpmData}
          reset={reset}
          charIndex={charIndex}
          correct={correct}
        />}

        {!isCompleted && <TypeInput
          inputLineText={inputLineText}
          setInputLineText={setInputLineText}
          lines={lines}
          lineIndex={lineIndex}
          setLineIndex={setLineIndex}
          charIndex={charIndex}
          setCharIndex={setCharIndex}
          setCompleted={setIsCompleted}
          setIsTimerRunning={setIsTimerRunning}
          setCorrect={setCorrect}
          chars={chars}
          submittedText={submittedText}
          setSubmittedText={setSubmittedText}
        />}
      </div>
    </div>
  )
}