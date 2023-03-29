import './App.css';

import Game from './components/Game'

import StatusState from './context/State/StatusState';





const App = () => {

  return (

    <StatusState>

      <div className="App">

      <Game />

      </div>

    </StatusState>

  );

}



export default App;
