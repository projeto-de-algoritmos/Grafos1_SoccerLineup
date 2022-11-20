import { useEffect } from "react";
import { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({children}) => {
    const [players, setPlayers] = useState({});
    const [playersGraph, setPlayersGraph] = useState([])

    useEffect(() => {
        if (Object.keys(players).length > 0){
            setPlayersGraph(prevState => [...prevState, players])
        }
    }, [players])

    return(
        <PlayerContext.Provider value={{playersGraph, setPlayers}}>
            {children}
        </PlayerContext.Provider>
    )
}