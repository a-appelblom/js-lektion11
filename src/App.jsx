import { createContext, useState } from "react";
import "./App.css";
import Home from "./pages/Home";

export const LoggedInContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="App">
        <Home />
      </div>
    </LoggedInContext.Provider>
  );
}

export default App;
