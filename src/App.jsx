import { useState } from "react";
import Header from "./Components/Main/Header";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("black");

  const changeBg = (blockColor) => {
    setBgColor(blockColor);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <Header changeBg={changeBg} />
    </div>
  );
}

export default App;
