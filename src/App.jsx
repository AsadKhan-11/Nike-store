import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
