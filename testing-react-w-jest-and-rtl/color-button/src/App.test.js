import { render, screen, fireEvent } from '@testing-library/react'
import App, { replaceCamelWithSpaces } from './App'

test('initial conditions', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(button).toBeEnabled()

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('button changes from blue to red when clicked', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })

  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  fireEvent.click(button)

  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' })
  expect(button).toHaveTextContent('Change to Medium Violet Red')
})

test('checkbox controls the button disabled prop', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })

  fireEvent.click(checkbox)
  expect(button).not.toBeEnabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})

test('button turns gray when disabled', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' })

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  fireEvent.click(button)
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' })

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' })
})

describe('replaceCamelWithSpaces', () => {
  test('no replacement when no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Blue')).toBe('Blue')
  })

  test('replaces one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('replaces many inner capital letter', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})