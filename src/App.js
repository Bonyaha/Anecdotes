import AnecdoteForm from './components/newAnecdote'
import AnecdoteList from './components/Anecdote'
import Filter from './components/Filter'
import Notification from './components/Notification'
const App = () => {
  return (
    <div>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
