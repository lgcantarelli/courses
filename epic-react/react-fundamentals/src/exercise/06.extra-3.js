// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState()

  function handleSubmit(event) {
    onSubmitUsername(username)
    event.preventDefault()
  }

  function handleUsernameChange(event) {
    const lowerCaseUsername = event.target.value.toLowerCase()
    setUsername(lowerCaseUsername)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username" >Username:</label>
        <input
          type="text"
          id="username"
          onChange={handleUsernameChange}
          value={username}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
