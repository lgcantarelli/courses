import { screen, render, fireEvent } from '@testing-library/react'
import SummaryForm from '../SummaryForm'

describe('SummaryForm', () => {
  test('initial state', () => {
    render(<SummaryForm />)

    expect(getCheckbox()).not.toBeChecked()
    expect(getButton()).toBeDisabled()
  })

  test('ticking the checkbox enable/disable to confirm the order', () => {
    render(<SummaryForm />)

    fireEvent.click(getCheckbox())
    expect(getButton()).toBeEnabled()

    fireEvent.click(getCheckbox())
    expect(getButton()).toBeDisabled()
  })

  function getCheckbox() {
    return screen.getByRole('checkbox', { name: /I agree to terms and conditions/i })
  }

  function getButton() {
    return screen.getByRole('button', { name: 'Confirm order' })
  }
})