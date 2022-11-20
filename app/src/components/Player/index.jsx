import './index.css'

export default function Player({photo, nationality, team_logo, name}){
    return (
        <button className="player-container">
            <img src={photo} alt="Foto do Jogador" className='player-picture'/>
            <div className='player-wrapper'>
                <p className='player-name'>{name}</p>
                <p className='player-nationatily'>{nationality}</p>
                <img src={team_logo} alt='Logo do Time' className='team-logo'/>
            </div>
        </button>
    )
}