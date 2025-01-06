import { useState } from 'react'

const FeedbackButton = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const FeedbackStatistics = ({optionText, value}) => {
  return (
    <div>
      {optionText} {value}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodOptionText = 'good'
  const neutralOptionText = 'neutral'
  const badOptionText = 'bad'

  return (
    <div>
      <h1>give feedback</h1>
      <FeedbackButton onClick={() => setGood(good + 1)} text={goodOptionText} />
      <FeedbackButton onClick={() => setNeutral(neutral + 1)} text={neutralOptionText} />
      <FeedbackButton onClick={() => setBad(bad + 1)} text={badOptionText} />
      <h1>statistics</h1>
      <FeedbackStatistics optionText={goodOptionText} value={good} />
      <FeedbackStatistics optionText={neutralOptionText} value={neutral} />
      <FeedbackStatistics optionText={badOptionText} value={bad} />
    </div>
  )
}

export default App