import React, { useState } from "react";
import "./styles.css";
// import TextInput from './components/TextInput';

function App() {

  const [redTone, setRedTone] = useState(0);
  const [blueTone, setBlueTone] = useState(0);
  const [greenTone, setGreenTone] = useState(0);

  function getRGBColor() {
    //TODO
  }
  return (
    <div>
      <label>Red</label>
      <input type="number" name="red" value={redTone} min="0" max="250" maxLength="3" onChange={event => setRedTone(event.target.value)} />
      <label>Blue</label>
      <input type="number" name="blue" value={blueTone} min="0" max="250" maxLength="3" onChange={event => setBlueTone(event.target.value)} />
      <label>Green</label>
      <input type="number" name="green" value={greenTone} min="0" max="250" maxLength="3" onChange={event => setGreenTone(event.target.value)} />
      <button type="button" onClick={getRGBColor}>Find Color</button>
      <br></br>
      <div className="rectangle" style={{ backgroundColor: `rgb(${redTone}, ${blueTone}, ${greenTone})` }}>
      </div>
    </div>
  );
}

export default App;
