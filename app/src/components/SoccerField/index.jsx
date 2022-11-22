import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import soccerField from "../../assets/soccer_field.png";
import { PlayerContext } from "../../contexts/PlayersContext";
import bfsSearch from "../../utils/bfsSearch";
import { CompatibilityResultDisplayer } from "../CompatibilityResultDisplayer";
import PlayerPicker from "../PlayerPicker";
import PlayerSelector from "../PlayerSelector";
import "./index.css";

export default function SoccerField() {
  const [openPlayerPicker, setOpenPlayerPicker] = useState({
    state: false,
    positionIndex: 0,
  });
  const [filterPosition, setFilterPosition] = useState("");
  const [playersCompatibility, setPlayersCompatibility] = useState(null)
  const [disableButton, setDisableButton] = useState(true)
  const { playersGraph } = useContext(PlayerContext);

  useEffect(() => {
    var checkPlayers = 0
    
    for (var i=0; i < playersGraph.length; i++){
      if (playersGraph[i].players){
        checkPlayers++;
      }
    }

    if (checkPlayers === 11){
      setDisableButton(false)
    }
  }, [playersGraph])

  return (
    <>
      <div className="field-container">
        {playersCompatibility !== null && (
          <>
            <CompatibilityResultDisplayer compatibilityResult={playersCompatibility} setCompatibilityResult={setPlayersCompatibility}/>
            <div className="backdrop"/>
          </>
        )}
        {openPlayerPicker.state && (
          <>
            <PlayerPicker
              setOpenPlayerPicker={setOpenPlayerPicker}
              positionIndex={openPlayerPicker.positionIndex}
              filterPosition={filterPosition}
            />
            <div className="backdrop" />
          </>
        )}
        <PlayerSelector
          x="50%"
          y="850px"
          position="CA"
          setOpenPlayerPicker={setOpenPlayerPicker}
          setFilterPosition={setFilterPosition}
          playerData={playersGraph[10]}
          index={10}
        />
        <PlayerSelector
          x="15%"
          y="740px"
          position="PD"
          setOpenPlayerPicker={setOpenPlayerPicker}
          setFilterPosition={setFilterPosition}
          playerData={playersGraph[9]}
          index={9}
        />
        <PlayerSelector
          x="85%"
          y="740px"
          position="PE"
          setOpenPlayerPicker={setOpenPlayerPicker}
          setFilterPosition={setFilterPosition}
          playerData={playersGraph[8]}
          index={8}
        />
        <PlayerSelector
          x="75%"
          y="480px"
          position="MEI"
          setOpenPlayerPicker={setOpenPlayerPicker}
          setFilterPosition={setFilterPosition}
          playerData={playersGraph[7]}
          index={7}
        />
        <PlayerSelector
          x="25%"
          y="480px"
          position="MEI"
          setOpenPlayerPicker={setOpenPlayerPicker}
          setFilterPosition={setFilterPosition}
          playerData={playersGraph[6]}
          index={6}
        />
        <PlayerSelector
          x="50%"
          y="350px"
          position="MEI"
          setOpenPlayerPicker={setOpenPlayerPicker}
          setFilterPosition={setFilterPosition}
          playerData={playersGraph[5]}
          index={5}
        />
        <PlayerSelector
          x="90%"
          y="190px"
          position="LE"
          setOpenPlayerPicker={setOpenPlayerPicker}
          setFilterPosition={setFilterPosition}
          playerData={playersGraph[4]}
          index={4}
        />
        <PlayerSelector
          x="10%"
          y="190px"
          position="LD"
          setOpenPlayerPicker={setOpenPlayerPicker}
          setFilterPosition={setFilterPosition}
          playerData={playersGraph[3]}
          index={3}
        />
        <PlayerSelector
          x="65%"
          y="140px"
          position="ZAG"
          setOpenPlayerPicker={setOpenPlayerPicker}
          setFilterPosition={setFilterPosition}
          playerData={playersGraph[2]}
          index={2}
        />
        <PlayerSelector
          x="35%"
          y="140px"
          position="ZAG"
          setOpenPlayerPicker={setOpenPlayerPicker}
          setFilterPosition={setFilterPosition}
          playerData={playersGraph[1]}
          index={1}
        />
        <PlayerSelector
          x="50%"
          y="0"
          position="GOL"
          setOpenPlayerPicker={setOpenPlayerPicker}
          setFilterPosition={setFilterPosition}
          playerData={playersGraph[0]}
          index={0}
        />
        <img
          src={soccerField}
          alt="Campo de futebol"
          className="soccer-field"
        />
      </div>
      <button
        className={`players-compatibility-button ${disableButton && 'disabled'}`}
        onClick={() => setPlayersCompatibility(bfsSearch(playersGraph))}
        disabled={disableButton}
      >
        Classificar compatibilidade do time
      </button>
    </>
  );
}
