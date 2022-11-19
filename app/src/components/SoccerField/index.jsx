import soccerField from '../../assets/soccer_field.png'
import PlayerSelector from '../PlayerSelector'
import './index.css'

export default function SoccerField(){
    return(
        <div className='field-container'>
            <PlayerSelector x="50%" y="850px" position="CA"/>
            <PlayerSelector x="15%" y="740px" position="PD"/>
            <PlayerSelector x="85%" y="740px" position="PE"/>
            <PlayerSelector x="75%" y="480px" position="MEI"/>
            <PlayerSelector x="25%" y="480px" position="MEI"/>
            <PlayerSelector x="50%" y="350px" position="MEI"/>
            <PlayerSelector x="90%" y="190px" position="LE"/>
            <PlayerSelector x="10%" y="190px" position="LD"/>
            <PlayerSelector x="65%" y="140px" position="ZAG"/>
            <PlayerSelector x="35%" y="140px" position="ZAG"/>
            <PlayerSelector x="50%" y="0" position="GOL"/>
            <img src={soccerField} alt="Campo de futebol" className='soccer-field'/>
        </div>
    )
}