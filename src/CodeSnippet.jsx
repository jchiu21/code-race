export default function CodeSnippet({ lines, lineIndex, inputLineText, correct }) {
  let idx = 0;
	return (
		<div className="codeSnippet">
			{lines.map((line, snippetLineIndex) => {
				return (
					<pre key={snippetLineIndex}>
						{[...line].map((char, snippetCharIndex) => {
              const currentIdx = idx++;
							return (
                <>
                  <span 
                  key={snippetCharIndex} 
                  style={{
                    color: 
                      (inputLineText.length >= snippetCharIndex && 
                        char === inputLineText[snippetCharIndex] && 
                        lineIndex === snippetLineIndex) || 
                        (lineIndex > snippetLineIndex && 
                          correct[currentIdx] === true)
                        ? 'green' : 'black',
                    backgroundColor: 
                      (inputLineText.length > snippetCharIndex && 
                      char !== inputLineText[snippetCharIndex] && 
                      lineIndex === snippetLineIndex) ||
                      correct[currentIdx] === false
                      ? 'red' : ''}}
                  >
                    {inputLineText.length === snippetCharIndex && lineIndex === snippetLineIndex && 
                      <span style={{ 
                        width: "2px", 
                        height: "21px", 
                        backgroundColor: "black", 
                        position: "absolute", 
                      }}/>
                    }
                    {char}
								  </span>
                </>
							)
            })}
					</pre>
				)
			})}
		</div>
	)
}

