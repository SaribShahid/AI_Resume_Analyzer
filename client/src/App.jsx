import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Home />
    </div>
  );
}

export default App;