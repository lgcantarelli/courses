// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { PokemonForm, fetchPokemon, PokemonInfoFallback, PokemonDataView } from '../pokemon'
import { ErrorBoundary  } from 'react-error-boundary'

const STATES = {
  Idle:     'idle',
  Pending:  'pending',
  Resolved: 'resolved',
  Rejected: 'rejected'
}

function PokemonInfo({ pokemonName }) {
  const [state, setState] = React.useState({
    error: null,
    pokemon: null,
    status: STATES.Idle
  })
  
  React.useEffect(() => {
    if (!pokemonName) return

    setState({
      ...state,
      pokemon: null,
      error: null,
      status: STATES.Pending
    })

    fetchPokemon(pokemonName).then(
      data => {
        setState({
          ...state,
          pokemon: data,
          status: STATES.Resolved
        })
      },
      error => {
        setState({
          ...state,
          error,
          status: STATES.Rejected
        })
      }
    )
  }, [pokemonName])

  if (state.status === STATES.Rejected)
    throw state.error

  if (state.status === STATES.Idle)
    return 'Submit a pokemon'
  if (state.status === STATES.Pending)
    return <PokemonInfoFallback name={pokemonName} />
  if (state.status === STATES.Resolved)
    return <PokemonDataView pokemon={state.pokemon} />
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          resetKeys={[pokemonName]}
        >
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      There was an error: <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
    </div>
  )
}

export default App
