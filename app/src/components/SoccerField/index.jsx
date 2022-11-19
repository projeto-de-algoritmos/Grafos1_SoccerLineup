import soccerField from '../../assets/soccer_field.png'
import PlayerSelector from '../PlayerSelector'
import './index.css'

export default function SoccerField(){
    return(
        <div className='field-container'>
            <PlayerSelector x="50%" y="20px" position="Gol"/>
            <img src={soccerField} alt="Campo de futebol" className='soccer-field'/>
        </div>
    )
}