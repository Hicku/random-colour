import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Colour from "./components/Colour";

function App() {
  const [curColour, setCurColour] = useState("");

  const divStyle = {
    backgroundColor: `#${curColour}`,
  };

  const getColour = async () => {
    const res = await fetch("https://www.colr.org/json/color/random");
    const data = await res.json();
    setCurColour(data.colors[0].hex);
    console.log(curColour);
  };

  return (
    <div className="App" style={divStyle}>
      <Buttons onGetColour={getColour} setCurColour={setCurColour} />
      <Colour curColour={curColour} />
    </div>
  );
}

export default App;
