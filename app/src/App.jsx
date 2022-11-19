import './App.css';
import unbLogo from './assets/logo_unb.png'
import soccerField from './assets/soccer_field.png'

function App() {
  return (
    <div className="App">
      <h1>PA 2022 <img src={unbLogo} width={56} alt="UnB Logo"/></h1>
      <h2>ULTIMATE TEAM</h2>
      <img src={soccerField} alt="Campo de futebol" className='soccer-field'/>
    </div>
  );
}

export default App;
