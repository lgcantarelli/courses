// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, { type, step }) {
  switch (type) {
    case 'INCREMENT':
      return { ...state, count: state.count + step }
    default:
      return state
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount
  })

  const increment = () => dispatch({ type: 'INCREMENT', step })

  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
