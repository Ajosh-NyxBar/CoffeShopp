import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
      </main>
    </div>
    //saasa
  );
}

export default App;
