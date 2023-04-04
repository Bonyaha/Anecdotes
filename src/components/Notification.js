import { useSelector } from 'react-redux'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }

  const notification = useSelector((state) => state.notification)
  return (
    <div style={style}>
      {notification === 'You posted new anecdote' ? (
        <strong>{notification}</strong>
      ) : (
        notification && (
          <>
            You voted <strong>{notification}</strong>
          </>
        )
      )}
    </div>
  )
}

export default Notification
