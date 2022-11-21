import { useEffect } from "react";
import { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({children}) => {
    const [players, setPlayers] = useState({});
    const [shouldUpdate, setShouldUpdate] = useState(false)
    const [playersGraph, setPlayersGraph] = useState(
        [
            {
                next_pos: [1,2]
            },
            {
                next_pos: [0,2,3,5]
            },
            {
                next_pos: [0, 1, 4, 5]
            },
            {
                next_pos: [1, 6]
            },
            {
                next_pos: [2, 7]
            },
            {
                next_pos: [1, 2, 6, 7, 8]
            },
            {
                next_pos: [3, 5, 9]
            },
            {
                next_pos: [4, 5, 10]
            },
            {
                next_pos: [5, 9, 10]
            },
            {
                next_pos: [6, 8]
            },
            {
                next_pos: [7, 8]
            }
        ])

    useEffect(() => {
        if (shouldUpdate){
            const nextPlayersGraph = playersGraph.map((player, pos) => {
                if (pos === players.positionIndex){
                    return {...player, players}
                } else{
                    return player
                }
            })
            setPlayersGraph(nextPlayersGraph)
            setShouldUpdate(false)
        }
    }, [players, playersGraph, shouldUpdate])

    return(
        <PlayerContext.Provider value={{playersGraph, setPlayers, setShouldUpdate}}>
            {children}
        </PlayerContext.Provider>
    )
}