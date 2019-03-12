import React from "react";

function Score(props) {
  return (
    <React.Fragment>
      <div className="score col-md-12">
        Current Score: {props.score} High Score: {props.highScore}
      </div>
    </React.Fragment>
  );
}

export default Score;
