import React from "react";
import "./style.css";

function Score(props) {
  return (
    <React.Fragment>
      <div className="score col-md-12">
        <p className="current-score">
          Current Score: {props.score}{" "}
          <span style={{ filter: "opacity(0)" }} id="correct">
            CORRECT!
          </span>
        </p>
        <p className="high-score">
          <span style={{ filter: "opacity(0)" }} id="incorrect">
            INCORRECT!
          </span>{" "}
          High Score: {props.highScore}
        </p>
      </div>
    </React.Fragment>
  );
}

export default Score;
