import './App.css';
import unbLogo from './assets/logo_unb.png'
import SoccerField from './components/SoccerField';


function App() {
  return (
    <div className="App">
      <h1>PA 2022 <img src={unbLogo} width={56} alt="UnB Logo"/></h1>
      <h2>ULTIMATE TEAM</h2>
      <SoccerField />
    </div>
  );
}

export default App;
