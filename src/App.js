import React from "react";
import "./App.css";
import Header from "./components/Header/header.component";
import Main from "./components/main/main.component";
import Sidebar from "./components/sidebar/sidebar.component";

function App() {
  return (
    <div className="container">
      <div className="top">
        <Header />
      </div>
      <div className="bottom">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
