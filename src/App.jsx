import { useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar/>
      <Section/>
    </div>
  );
}

export default App;
