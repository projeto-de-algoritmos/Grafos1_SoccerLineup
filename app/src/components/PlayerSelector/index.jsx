import "./index.css";

export default function PlayerSelector(props) {
  const style = {
    right: props.y,
    top: props.x,
    transform: "translate(-50%, -50%)",
  };

  const handleClick = () => {
    props.setOpenPlayerPicker(true)
    switch (props.position){
      case 'GOL':
        props.setFilterPosition('Goalkeeper');
        break;
      case 'ZAG':
      case 'LD':
      case 'LE':
        props.setFilterPosition('Defender');
        break;
      case 'MEI':
        props.setFilterPosition('Midfielder');
        break;
      case 'CA':
      case 'PD':
      case 'PE':
        props.setFilterPosition('Attacker');
        break;
      default:
        props.setFilterPosition('')
    }
  }
  return (
    <button className="player-selector-container" style={style} onClick={handleClick}>
      {props.team ? <></> : <p className="player-position">{props.position}</p>}
    </button>
  );
}
