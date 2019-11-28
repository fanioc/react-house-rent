import React from "react";
import css from "./App.module.css";

class NotFound extends React.Component {
  render() {
    return (
      <div className={css.App}>
        <header className={css.App_header}>
          <p>
            <code>Sorry Not Found.</code>
          </p>
        </header>
      </div>
    );
  }
}

export default NotFound;
