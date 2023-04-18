import logo from './logo.svg';
import './App.css';

import GreetingF from './componets/pure/GreetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <GreetingF name = "Martin"/>
      </header>
    </div>
  );
}

export default App;
