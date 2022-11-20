import Player from "../Player";
import SoccerPlayers from '../../assets/soccer_players_response.json'
import "./index.css";

export default function PlayerPicker(props) {
  return (
    <div className="player-picker-container">
      <button className="close-btn" onClick={() => props.setOpenPlayerPicker(false)}>
        <span className="material-icons">cancel</span>
      </button>
      <h1>Pick your player</h1>
      <div className="players-wrapper">
        {SoccerPlayers.filter(player => player.position === props.filterPosition).map((player) => 
          <Player photo={player.photo} nationality={player.nationality} team_logo={player.team.logo} name={player.name} />
        )}
      </div>
    </div>
  );
}
