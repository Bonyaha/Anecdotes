import AnecdoteForm from './components/newAnecdote'
import AnecdoteList from './components/Anecdote'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
