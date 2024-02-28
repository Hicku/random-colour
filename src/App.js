import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Colour from "./components/Colour";

function App() {
  const [curColour, setCurColour] = useState("");
  const [isRGB, setisRGB] = useState(false);

  const divStyle = {
    backgroundColor: curColour,
  };

  const handleRGBTrue = () => {
    setisRGB(true);
  };

  const handleRGBFalse = () => {
    setisRGB(false);
  };

  const getColour = async () => {
    const res = await fetch("https://x-colors.yurace.pro/api/random");
    const data = await res.json();
    if (isRGB) {
      setCurColour(data.rgb);
    } else {
      setCurColour(data.hex);
    }
  };

  return (
    <div className="App" style={divStyle}>
      <Buttons
        onGetColour={getColour}
        setCurColour={setCurColour}
        onHandleRGBTrue={handleRGBTrue}
        onHandleRGBFalse={handleRGBFalse}
      />
      <Colour curColour={curColour} isRGB={isRGB} />
    </div>
  );
}

export default App;
