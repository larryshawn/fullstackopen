import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
  // console.log(props)
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = (props) => {
  console.log("props", props)
  if (props.total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticsLine text="Good:" value={props.good} />
      <StatisticsLine text="Neutral:" value={props.neutral} />
      <StatisticsLine text="Bad:" value={props.bad} />
      <StatisticsLine text="All:" value={props.total} />
      <StatisticsLine text="Average:" value={props.average} />
      <StatisticsLine text="Positive:" value={props.positive + '%'} />
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Nuetral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App