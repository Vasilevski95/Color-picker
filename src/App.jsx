import "./App.css";
import { useState } from "react";
import Square from "./components/Square";
import Input from "./components/Input";

function App() {
  const [colorName, setColorName] = useState("");

  const [hexValue, setHexValue] = useState("");

  return (
    <div className="App">
      <Square colorName={colorName} hexValue={hexValue} />
      <Input
        colorName={colorName}
        setColorName={setColorName}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
