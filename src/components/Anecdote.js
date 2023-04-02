import { useDispatch, useSelector } from 'react-redux'
import { changeVotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { clearNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === 'ALL') {
      return [...anecdotes].sort((a, b) => b.votes - a.votes)
    } else {
      return anecdotes.filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
      )
    }
  })

  return (
    <div>
      <h2>Anecdotes</h2>

      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            dispatch(changeVotes(anecdote.id))
            dispatch(setNotification(anecdote.content))
            setTimeout(() => {
              dispatch(clearNotification())
            }, 5000)
          }}
        />
      ))}
    </div>
  )
}

export default AnecdoteList
