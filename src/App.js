import logo from "./logo.svg";
import "./App.css";

import GreetingF from "./componets/pure/GreetingF";
import TaskListComponent from "./componets/container/task_list";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/ejemplo2";

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
        {/*<TaskListComponent></TaskListComponent>*/}
        <Ejemplo2/>
      </header>
    </div>
  );
}

export default App;
