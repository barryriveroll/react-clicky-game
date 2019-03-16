import React from "react";
import "./style.css";

function Title(props) {
  return (
    <header>
      <img
        className="logo"
        alt="Futurama logo"
        src="./images/futuramaLogo.png"
      />
      <img className="ship" alt="Futurama ship" src="./images/ship.png" />
      <h1 className="title">CLICKY GAME</h1>
      <p>
        Click a character to get a point! Be careful though, if you click a
        character you already clicked, you lose!
      </p>
    </header>
  );
}

export default Title;
