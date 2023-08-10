import React from "react";

export default function Day({ day, handleClick }) {
  return (
    <div className={`day ${day === 0 && "hideDate"}`} onClick={handleClick}>
      {day === 0 ? "" : day}
    </div>
  );
}
