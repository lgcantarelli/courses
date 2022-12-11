import { useState, useEffect } from 'react'

function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item).state : defaultValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify({ state }))
  }, [state])

  return [state, setState]
}

export default useLocalStorageState