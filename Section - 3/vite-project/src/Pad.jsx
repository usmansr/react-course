import react from "react";

export default function Pad(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={`pad-button ${props.on ? "on" : ""}`}
      onClick={() => props.toggle(props.id)}
    ></button>
  );
}
