import { useState } from "react";
import Header from "./Components/Main/Header";
import "./App.css";
import Black from "../src/assets/Black.png";

function App() {
  const [bgColor, setBgColor] = useState({
    backgroundColor: "#000000",
    image: `url(${Black}) `,
    name: "black",
  });

  const changeBg = (blockColor, blockimg, blockname) => {
    setBgColor({
      backgroundColor: blockColor,
      image: `url(${blockimg} )`,
      name: blockname,
    });
  };

  return (
    <div
      className="app"
      style={{
        backgroundColor: bgColor.backgroundColor,
      }}
    >
      <div
        className="app-img"
        style={{
          backgroundImage: bgColor.image,
        }}
      ></div>
      <Header changeBg={changeBg} bgColor={bgColor} />
    </div>
  );
}

export default App;
