import React from "react";
import "./style.css";

const styles = {
  shuffle: {
    // top: "30%",
    // left: "50%"
  }
};

function CharacterCard(props) {
  return (
    <div
      className="card"
      id={props.name}
      style={props.shuffle ? styles.shuffle : {}}
    >
      <div
        className={"img-container bg-" + props.bg}
        onMouseOver={() => addRotate(document.getElementById(props.name))}
        onMouseOut={() => resetRotate(document.getElementById(props.name))}
        onClick={
          props.clicked ? props.resetGame : () => props.addToScore(props.id)
        }
      >
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

function addRotate(element) {
  let num = Math.floor(Math.random() * 6) + 1;
  num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  element.setAttribute("style", `transform: rotate(${num}deg) scale(1.2)`);
}

function resetRotate(element) {
  element.setAttribute("style", "transform: rotate(0deg)");
}

export default CharacterCard;
