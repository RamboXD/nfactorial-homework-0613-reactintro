import NavBar from "./components/navBar/navBar.js";
import Main from "./components/main/Main.js";
import React from "react";

function App() {
  return (
    <div
      className="body"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
