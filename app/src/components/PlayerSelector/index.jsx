import "./index.css";

export default function PlayerSelector(props) {
  const style = {
    right: props.y,
    top: props.x,
    transform: "translate(-50%, -50%)",
  };

  const handleClick = () => {
    props.setOpenPlayerPicker(true);
    switch (props.position) {
      case "GOL":
        props.setFilterPosition("Goalkeeper");
        break;
      case "ZAG":
      case "LD":
      case "LE":
        props.setFilterPosition("Defender");
        break;
      case "MEI":
        props.setFilterPosition("Midfielder");
        break;
      case "CA":
      case "PD":
      case "PE":
        props.setFilterPosition("Attacker");
        break;
      default:
        props.setFilterPosition("");
    }
  };
  return (
    <button
      className="player-selector-container"
      style={style}
      onClick={handleClick}
    >
      {props.playerData ? (
        <div className="display-player-data">
          <img className="soccer-field-player-photo" src={props.playerData.photo} alt="Imagem do Jogador" />
          <div>
            <p className="soccer-field-player-nationality">{props.playerData.nationality}</p>
            <img src={props.playerData.team_logo} alt="Logo do Time" className="soccer-field-team-logo"/>
          </div>
        </div>
      ) : (
        <p className="player-position">{props.position}</p>
      )}
    </button>
  );
}
