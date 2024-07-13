import React from "react";
import "./../styles/cube.scss";

const Cube = (props) => {
  return (
    <div className="cube" style={props.styles}>
      <div className="cube-face front"></div>
      <div className="cube-face back"></div>
      <div className="cube-face left"></div>
      <div className="cube-face right"></div>
      <div className="cube-face top"></div>
      <div className="cube-face bottom"></div>
    </div>
  );
};

export default Cube;
