import React from "react";
import logo from "./logo.svg";
import CSS from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={CSS.App}>
      <header className={CSS.App_header}>
        <img src={logo} className={CSS.App_logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={CSS.App_link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
