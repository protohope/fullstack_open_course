import { useState } from 'react'

const FeedbackButton = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const FeedbackStatistics = ({fieldText, value}) => {
  return (
    <div>
      {fieldText} {value}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = all == 0 ? 0 : ((good - bad) / all)
  const positive = all == 0 ? 0 : 100 * good / all

  const goodOptionText = 'good'
  const neutralOptionText = 'neutral'
  const badOptionText = 'bad'
  const allText = 'all'
  const averageText = 'average'
  const positiveText = 'positive'

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <FeedbackButton onClick={handleGood} text={goodOptionText} />
      <FeedbackButton onClick={handleNeutral} text={neutralOptionText} />
      <FeedbackButton onClick={handleBad} text={badOptionText} />
      <h1>statistics</h1>
      <FeedbackStatistics fieldText={goodOptionText} value={good} />
      <FeedbackStatistics fieldText={neutralOptionText} value={neutral} />
      <FeedbackStatistics fieldText={badOptionText} value={bad} />
      <FeedbackStatistics fieldText={allText} value={all} />
      <FeedbackStatistics fieldText={averageText} value={average} />
      <FeedbackStatistics fieldText={positiveText} value={positive + '%'} />
    </div>
  )
}

export default App