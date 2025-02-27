/** @format */

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div>
      <h1 className="text-green-500 text-6xl text-center border-red-500 border">Gerenciador de tarefas</h1>
      <Tasks />
      <AddTask />
    </div>
  );
}

export default App;
