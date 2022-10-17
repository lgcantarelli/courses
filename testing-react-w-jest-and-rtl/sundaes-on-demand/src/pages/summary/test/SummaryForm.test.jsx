import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SummaryForm from '../SummaryForm'

describe('SummaryForm', () => {
  test('initial state', () => {
    render(<SummaryForm />)

    expect(getCheckbox()).not.toBeChecked()
    expect(getButton()).toBeDisabled()
  })

  test('ticking the checkbox enable/disable to confirm the order', async () => {
    const user = userEvent.setup()
    
    render(<SummaryForm />)

    await user.click(getCheckbox())
    expect(getButton()).toBeEnabled()

    await user.click(getCheckbox())
    expect(getButton()).toBeDisabled()
  })

  function getCheckbox() {
    return screen.getByRole('checkbox', { name: /I agree to terms and conditions/i })
  }

  function getButton() {
    return screen.getByRole('button', { name: 'Confirm order' })
  }
})