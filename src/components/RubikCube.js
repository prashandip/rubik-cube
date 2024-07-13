import React from "react";
import Cube from "./Cube";
import "./../styles/rubik-cube.scss";

const RubikCube = () => {
  const x = 80;
  const createStyles = (top, left, face) => {
    switch (face) {
      case "FRONT":
        return { top: `${top}px`, left: `${left}px` };
      case "MID":
        return {
          top: `${top}px`,
          left: `${left}px`,
          transform: `translateZ(-${x}px)`,
        };
      case "BACK":
        return {
          top: `${top}px`,
          left: `${left}px`,
          transform: `translateZ(-${2 * x}px)`,
        };
      default:
        return { top: `${top}px`, left: `${left}px` };
    }
  };
  return (
    <div className="rubik-cube">
      {/* FACE 1 */}
      <Cube styles={createStyles(0, 0, "FRONT")} />
      <Cube styles={createStyles(0, x, "FRONT")} />
      <Cube styles={createStyles(0, 2 * x, "FRONT")} />
      <Cube styles={createStyles(x, 0, "FRONT")} />
      <Cube styles={createStyles(x, x, "FRONT")} />
      <Cube styles={createStyles(x, 2 * x, "FRONT")} />
      <Cube styles={createStyles(2 * x, 0, "FRONT")} />
      <Cube styles={createStyles(2 * x, x, "FRONT")} />
      <Cube styles={createStyles(2 * x, 2 * x, "FRONT")} />
      {/* FACE 2 */}
      <Cube styles={createStyles(0, 0, "MID")} />
      <Cube styles={createStyles(0, x, "MID")} />
      <Cube styles={createStyles(0, 2 * x, "MID")} />
      <Cube styles={createStyles(x, 0, "MID")} />
      <Cube styles={createStyles(x, x, "MID")} />
      <Cube styles={createStyles(x, 2 * x, "MID")} />
      <Cube styles={createStyles(2 * x, 0, "MID")} />
      <Cube styles={createStyles(2 * x, x, "MID")} />
      <Cube styles={createStyles(2 * x, 2 * x, "MID")} />
      {/* FACE 3 */}
      <Cube styles={createStyles(0, 0, "BACK")} />
      <Cube styles={createStyles(0, x, "BACK")} />
      <Cube styles={createStyles(0, 2 * x, "BACK")} />
      <Cube styles={createStyles(x, 0, "BACK")} />
      <Cube styles={createStyles(x, x, "BACK")} />
      <Cube styles={createStyles(x, 2 * x, "BACK")} />
      <Cube styles={createStyles(2 * x, 0, "BACK")} />
      <Cube styles={createStyles(2 * x, x, "BACK")} />
      <Cube styles={createStyles(2 * x, 2 * x, "BACK")} />
    </div>
  );
};

export default RubikCube;
