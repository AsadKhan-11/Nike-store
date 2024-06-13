import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Main/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
