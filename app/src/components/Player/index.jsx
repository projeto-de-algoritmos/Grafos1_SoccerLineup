import { useContext } from 'react'
import { PlayerContext } from '../../contexts/PlayersContext'
import formatPlayerName from '../../utils/formatPlayerName'
import './index.css'

export default function Player({photo, nationality, team_logo, name, team_name, handleClosePlayerPicker, positionIndex}){
    const {setPlayers, setShouldUpdate} = useContext(PlayerContext)
    
    const handleClick = () => {
        setPlayers({
            photo,
            nationality,
            team_logo,
            team_name,
            positionIndex
        })
        setShouldUpdate(true)
        handleClosePlayerPicker()
    }
    return (
        <button className="player-container" onClick={handleClick}>
            <img src={photo} alt="Foto do Jogador" className='player-picture'/>
            <div className='player-wrapper'>
                <p className='player-name'>{formatPlayerName(name)}</p>
                <p className='player-nationatily'>{nationality}</p>
                <img src={team_logo} alt='Logo do Time' className='team-logo'/>
            </div>
        </button>
    )
}