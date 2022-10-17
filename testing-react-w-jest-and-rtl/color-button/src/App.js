import { useState } from 'react';
import './App.css';

const redStyle = {
  backgroundColor: 'red',
  text: 'Change to blue'
}

const blueStyle = {
  backgroundColor: 'blue',
  text: 'Change to red'
}

function App() {
  const [buttonStyle, setButtonStyle] = useState(redStyle)
  const [disabled, setDisabled] = useState(false)

  function toggleButtonColor() {
    const newButtonStyle = buttonStyle.backgroundColor === 'red' ? blueStyle : redStyle
    setButtonStyle(newButtonStyle)
  }

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonStyle.backgroundColor }}
        onClick={toggleButtonColor}
        disabled={disabled}
      >
        {buttonStyle.text}
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

export default App;
