import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div
        className={props.clicked ? "img-container-red" : "img-container"}
        onClick={
          props.clicked ? props.resetGame : () => props.addToScore(props.id)
        }
      >
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CharacterCard;
