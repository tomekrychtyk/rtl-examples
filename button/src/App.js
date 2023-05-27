import { useState } from 'react';

import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const color = disabled ? 'gray' : buttonColor;

  return (
    <div>
      <button
        onClick={() => setButtonColor(buttonColor === 'red' ? 'blue' : 'red')}
        style={{ backgroundColor: color }}
        disabled={disabled}
      >
        {buttonColor === 'red' ? 'Change to blue' : 'Change to red'}
      </button>
      <input
        id='disable-button-checkbox'
        type='checkbox'
        onClick={() => setDisabled(!disabled)}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
