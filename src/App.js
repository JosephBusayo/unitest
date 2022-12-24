import { useState } from 'react';
import './App.css';

function App() {
  const [btnColor, setBtnColor] = useState('green')
  const newBtnColor = btnColor === 'green' ? 'blue' : 'green'

  return (
    <div className="App">
      <h1>Test App</h1>

      <button
        style={{ backgroundCOlor: btnColor}}
        onClick={() => setBtnColor(newBtnColor)}
      >
        Change button color to {newBtnColor}
      </button>
    </div>
  );
}

export default App;
