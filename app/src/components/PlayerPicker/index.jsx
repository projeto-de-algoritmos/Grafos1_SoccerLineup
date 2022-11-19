import "./index.css";

export default function PlayerPicker(props) {
  return (
    <div className="player-picker-container">
      <button className="close-btn" onClick={() => props.setOpenPlayerPicker(false)}>
        <span className="material-icons">cancel</span>
      </button>
      <h2>Pick your player</h2>
    </div>
  );
}
