import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>
      {text} {value}
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
      <div>
        <h1>{statisticsText}</h1>
        <p>No feedback given</p>
      </div>
    )
  }


  const average = all == 0 ? 0 : ((good - bad) / all)
  const positive = all == 0 ? 0 : 100 * good / all

  const allText = 'all'
  const averageText = 'average'
  const positiveText = 'positive'

  return (
    <div>
      <h1>{statisticsText}</h1>
      <StatisticLine text={goodOptionText} value={good} />
      <StatisticLine text={neutralOptionText} value={neutral} />
      <StatisticLine text={badOptionText} value={bad} />
      <StatisticLine text={allText} value={all} />
      <StatisticLine text={averageText} value={average} />
      <StatisticLine text={positiveText} value={positive + '%'} />
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
      <Button onClick={handleGood} text={goodOptionText} />
      <Button onClick={handleNeutral} text={neutralOptionText} />
      <Button onClick={handleBad} text={badOptionText} />
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