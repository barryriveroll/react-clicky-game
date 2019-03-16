import React from "react";

const styles = {
  row: {
    width: 928,
    margin: "0 auto",
    position: "relative",
    transition: "left 0.1s"
  }
};

function CardWrapper(props) {
  return (
    <div style={styles.row} id="card-wrapper" className="row">
      {props.children}
    </div>
  );
}

export default CardWrapper;
