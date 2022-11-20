import Player from "../Player";
import SoccerPlayers from "../../assets/soccer_players_response.json";
import "./index.css";

export default function PlayerPicker(props) {
  const handleClosePlayerPicker = () => {
    props.setOpenPlayerPicker({
      state: false,
      positionIndex: 0
    });
  };
  return (
    <div className="player-picker-container">
      <button className="close-btn" onClick={handleClosePlayerPicker}>
        <span className="material-icons">cancel</span>
      </button>
      <h1>Pick your player</h1>
      <div className="players-wrapper">
        {SoccerPlayers.filter(
          (player) => player.position === props.filterPosition
        ).map((player, index) => (
          <Player
            photo={player.photo}
            nationality={player.nationality}
            team_logo={player.team.logo}
            name={player.name}
            team_name={player.team.name}
            handleClosePlayerPicker={handleClosePlayerPicker}
            key={index}
            positionIndex={props.positionIndex}
          />
        ))}
      </div>
    </div>
  );
}
