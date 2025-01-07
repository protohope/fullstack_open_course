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

const Statistics = (
  {goodOptionText, neutralOptionText, badOptionText,
    good, neutral, bad}) => {
  const statisticsText = 'statistics'

  const all = good + neutral + bad

  if (all == 0) {
    return (
      <>
        <h1>{statisticsText}</h1>
        <p>No feedback given</p>
      </>
    )
  }


  const average = all == 0 ? 0 : ((good - bad) / all)
  const positive = all == 0 ? 0 : 100 * good / all

  const allText = 'all'
  const averageText = 'average'
  const positiveText = 'positive'

  return (
    <>
      <h1>{statisticsText}</h1>
      <FeedbackStatistics fieldText={goodOptionText} value={good} />
      <FeedbackStatistics fieldText={neutralOptionText} value={neutral} />
      <FeedbackStatistics fieldText={badOptionText} value={bad} />
      <FeedbackStatistics fieldText={allText} value={all} />
      <FeedbackStatistics fieldText={averageText} value={average} />
      <FeedbackStatistics fieldText={positiveText} value={positive + '%'} />
    </>
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
      <Statistics
        goodOptionText={goodOptionText}
        neutralOptionText={neutralOptionText}
        badOptionText={badOptionText}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App