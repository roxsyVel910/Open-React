import logo from "./logo.svg";
import "./App.css";

import GreetingF from "./componets/pure/GreetingF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx 
         <Greeting name="Jose"></Greeting> 
         Componente de ejemplo funcional 
         <GreetingF name="Jose"></GreetingF> 
        Componente de Listado de Tareas */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
