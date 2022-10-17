import React, { useState } from 'react'

function SummaryForm() {
  const [termsAccepted, setTermsAccepted] = useState(false)

  return (
    <div>
      <input
        type='checkbox'
        id='terms-and-conditions-checkbox'
        onChange={(e) => setTermsAccepted(e.target.checked)}
      />
      <label htmlFor='terms-and-conditions-checkbox'>
        I agree to <a href='#/'>Terms and Conditions</a>
      </label>

      <button disabled={!termsAccepted}>Confirm order</button>
    </div>
  )
}

export default SummaryForm
