import { useState } from "react";
import soccerField from "../../assets/soccer_field.png";
import PlayerPicker from "../PlayerPicker";
import PlayerSelector from "../PlayerSelector";
import "./index.css";

export default function SoccerField() {
  const [openPlayerPicker, setOpenPlayerPicker] = useState(false);
  const [filterPosition, setFilterPosition] = useState('');
  return (
    <div className="field-container">
      {openPlayerPicker && (
        <>
          <PlayerPicker setOpenPlayerPicker={setOpenPlayerPicker} filterPosition={filterPosition}/>
          <div className="backdrop" />
        </>
      )}
      <PlayerSelector
        x="50%"
        y="850px"
        position="CA"
        setOpenPlayerPicker={setOpenPlayerPicker}
        setFilterPosition={setFilterPosition}
      />
      <PlayerSelector
        x="15%"
        y="740px"
        position="PD"
        setOpenPlayerPicker={setOpenPlayerPicker}
        setFilterPosition={setFilterPosition}
      />
      <PlayerSelector
        x="85%"
        y="740px"
        position="PE"
        setOpenPlayerPicker={setOpenPlayerPicker}
        setFilterPosition={setFilterPosition}
      />
      <PlayerSelector
        x="75%"
        y="480px"
        position="MEI"
        setOpenPlayerPicker={setOpenPlayerPicker}
        setFilterPosition={setFilterPosition}
      />
      <PlayerSelector
        x="25%"
        y="480px"
        position="MEI"
        setOpenPlayerPicker={setOpenPlayerPicker}
        setFilterPosition={setFilterPosition}
      />
      <PlayerSelector
        x="50%"
        y="350px"
        position="MEI"
        setOpenPlayerPicker={setOpenPlayerPicker}
        setFilterPosition={setFilterPosition}
      />
      <PlayerSelector
        x="90%"
        y="190px"
        position="LE"
        setOpenPlayerPicker={setOpenPlayerPicker}
        setFilterPosition={setFilterPosition}
      />
      <PlayerSelector
        x="10%"
        y="190px"
        position="LD"
        setOpenPlayerPicker={setOpenPlayerPicker}
        setFilterPosition={setFilterPosition}
      />
      <PlayerSelector
        x="65%"
        y="140px"
        position="ZAG"
        setOpenPlayerPicker={setOpenPlayerPicker}
        setFilterPosition={setFilterPosition}
      />
      <PlayerSelector
        x="35%"
        y="140px"
        position="ZAG"
        setOpenPlayerPicker={setOpenPlayerPicker}
        setFilterPosition={setFilterPosition}
      />
      <PlayerSelector
        x="50%"
        y="0"
        position="GOL"
        setOpenPlayerPicker={setOpenPlayerPicker}
        setFilterPosition={setFilterPosition}
      />
      <img src={soccerField} alt="Campo de futebol" className="soccer-field" />
    </div>
  );
}
