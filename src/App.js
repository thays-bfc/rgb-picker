import React, { useState, useEffect } from "react";
import "./styles.css";
import TextInput from './components/TextInput';

function App() {

  const [redTone, setRedTone] = useState(0);
  const [blueTone, setBlueTone] = useState(0);
  const [greenTone, setGreenTone] = useState(0);
  const [hexaValue, setHexaValue] = useState("");

  //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  function getRGBColor() {
    setHexaValue("#" + componentToHex(parseInt(redTone)) + componentToHex(parseInt(blueTone)) + componentToHex(parseInt(greenTone)));
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  useEffect(() => {
    getRGBColor();
  }, [redTone, blueTone, greenTone])

  return (
    <div>
      <TextInput label="Red" name="red" value={redTone} onChange={event => setRedTone(event.target.value)} ></TextInput>
      <TextInput label="Blue" name="blue" value={blueTone} onChange={event => setBlueTone(event.target.value)} ></TextInput>
      <TextInput label="Green" name="green" value={greenTone} onChange={event => setGreenTone(event.target.value)} ></TextInput>
      <button type="button" onClick={getRGBColor}>Find Hexa Color</button>
      <label>{hexaValue}</label>
      <br></br>
      <div className="rectangle" style={{ backgroundColor: `rgb(${redTone}, ${blueTone}, ${greenTone})` }}>
      </div>
    </div>
  );
}

export default App;
