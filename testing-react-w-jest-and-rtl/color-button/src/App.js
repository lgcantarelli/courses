import { useState } from 'react';
import './App.css';


function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [disabled, setDisabled] = useState(false)

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>

      <input 
        type='checkbox'
        id='checkbox'
        value={disabled}
        onChange={e => setDisabled(e.target.checked)}
      />
      <label htmlFor='checkbox'>Disable button</label>
    </div>
  );
}

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

export default App;
