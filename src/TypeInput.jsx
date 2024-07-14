  export default function TypeInput (
    {inputLineText, setInputLineText, lines, lineIndex, setLineIndex, charIndex, setCharIndex, 
      setCompleted, setIsTimerRunning, setCorrect, chars, submittedText, setSubmittedText}) {
    const updateText = (evt) => {
      const inputText = evt.target.value;
      if (inputText.length <= lines[lineIndex].length) {
        // Start timer if user begins typing
        if (lineIndex === 0 && inputText.length > 0) {
          setIsTimerRunning(true)
        }
        const currentChars = chars.slice(0, submittedText.length + inputText.length)
        setCorrect(() => currentChars.map((char, idx) => {
          if (idx >= submittedText.length) {
            return char === inputText[idx-submittedText.length]
          }
          return char === submittedText[idx]
        }));
        setInputLineText(inputText);
        setCharIndex(inputText.length + submittedText.length-1)
      }
    }
    const handleSubmit = () => {
      // Check if line can be submitted
      if (inputLineText.length >= lines[lineIndex].length || lines[lineIndex] === " ") {
        setSubmittedText((prevSubmitted) => {
          return [...prevSubmitted, ...inputLineText.split('')]
        })
        // Check if current line is the last
        if (lineIndex === lines.length - 1) {
          setCompleted(true);
          setIsTimerRunning(false);
        }
        else {
          setInputLineText("");
          setLineIndex(lineIndex => lineIndex + 1); 
        }
      }
    }
    return (
      <input 
        className="typeInput" 
        type="text" 
        value={inputLineText} 
        onChange={updateText} 
        placeholder={lines[lineIndex]}
        onKeyDown={(evt) => {
          if (evt.key === 'Enter') {
            handleSubmit();
          }
        }}
        onPaste={(evt) => {
          evt.preventDefault();
        }}
      />
    )
  }