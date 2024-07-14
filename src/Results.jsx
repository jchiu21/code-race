import { LineChart, ResponsiveContainer, XAxis, YAxis, Line, Label } from "recharts"

export default function Results({ wpm, wpmData, reset, charIndex, correct }) {
  const wpmDataObject = wpmData.map((number, index) => ({wpm: number, time: index + 1}))
  const incorrectCount = Math.round(correct.filter(v => v == false).length);
  const accuracy = (charIndex - incorrectCount)/charIndex

  return (
    <>
      <h2>You Finished!</h2>
      <div className="resultsText">
        <p>WPM: {wpm}</p>
        <p>Accuracy: {Math.round(accuracy * 100)}%</p>
      </div>
      
      <ResponsiveContainer width={'80%'} height={300} className="chartContainer">
        <LineChart data={wpmDataObject} margin={{bottom: 20, right: 15, top: 10}}>
          <Line type="monotone" dataKey="wpm" stroke="#8884d8" strokeWidth={2} />
          <YAxis tick={{fontSize: 14}}>
            <Label value="words per minute" angle={270} dx={-20} fontSize={18}/>
          </YAxis>
          <XAxis dataKey="time" tick={{fontSize: 14}} interval={wpmData.length > 30 ? 1 : 0}>
            <Label value="time (s)" dy={20} fontSize={18}/>
          </XAxis>
        </LineChart>
      </ResponsiveContainer>

      <button onClick={reset}>New Game</button>
    </>
  )
}