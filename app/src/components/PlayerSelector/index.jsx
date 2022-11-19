import "./index.css";

export default function PlayerSelector(props) {
  const style = {
    right: props.y,
    top: props.x,
    transform: "translate(-50%, -50%)",
  };
  return (
    <button className="player-picker-container" style={style}>
      {props.team ? <></> : <h1 className="player-position">{props.position}</h1>}
    </button>
  );
}
