import React, { useState } from "react";
import "./AppXY.css";
export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    setPosition({x :  e.clientX , y : e.clientY});
    // 수평이동만 가능할 경우
    // setPosition((pre) => ({
    //   ...pre,
    //   x: e.clientX,
    // }));
  };

  return (
    <div className="container" onPointerMove={handlePointerMove}>
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px , ${position.y}px)` }}
      ></div>
    </div>
  );
}
