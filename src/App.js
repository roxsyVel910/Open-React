import logo from './logo.svg';
import './App.css';
import Greeting from './componets/pure/greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Greeting name = "Martin"/>
      </header>
    </div>
  );
}

export default App;
