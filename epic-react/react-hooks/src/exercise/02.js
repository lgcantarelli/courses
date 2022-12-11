// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import useLocalStorageState from '../hooks/useLocalStorageState'

function Greeting({ initialName = '' }) {
  const [name, setName] = useLocalStorageState('name', initialName)
  const [nameLength, setNameLength] = useLocalStorageState('nameLength', name.length)
  const [info, setInfo] = useLocalStorageState('info', { name, length: name.length })

  function handleChange(event) {
    setName(event.target.value)
    setNameLength(event.target.value.length)
    setInfo({
      name: event.target.value,
      length: event.target.value.length
    })
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
      
      <div></div>Length: <strong>{nameLength}</strong>
      <div></div>Info Name: <strong>{info.name}</strong>
      <div></div>Info Name Length: <strong>{info.length}</strong>
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
