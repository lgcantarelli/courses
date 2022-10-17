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

  function toggleButtonStyle() {
    const newButtonStyle = buttonStyle.backgroundColor === 'red' ? blueStyle : redStyle
    setButtonStyle(newButtonStyle)
  }

  return (
    <div>
      <button
        style={{ backgroundColor: buttonStyle.backgroundColor }}
        onClick={toggleButtonStyle}
        disabled={disabled}
      >
        {buttonStyle.text}
      </button>

      <input 
        type='checkbox'
        value={disabled}
        onChange={e => { setDisabled(e.target.checked) }}
      />
    </div>
  );
}

export default App;
