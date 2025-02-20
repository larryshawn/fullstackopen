import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  // set to an array of zeros
  const votes = Array(anecdotes.length).fill(0)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [voteCounts, setVoteCounts] = useState([...votes])

  const mostVotes = Math.max(...voteCounts)

  const indexOfMostVotes = voteCounts.indexOf(mostVotes)

  const nextAnecdote = () => {
    setSelectedIndex(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    // copy
    const copyOfVotes = [...voteCounts]
    // update
    copyOfVotes[selectedIndex] += 1
    // set
    setVoteCounts(copyOfVotes)
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <button onClick={handleVote}>Vote</button>
      <button onClick={nextAnecdote}>Next anecdote</button>
      <p>{anecdotes[selectedIndex]}</p>
      <p>has {voteCounts[selectedIndex]} votes</p>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[indexOfMostVotes]}</p>
      <p>has {mostVotes} votes</p>

    </div>
  )
}

export default App