import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
//import Task from './components/Task';

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  // console.log(newTask);

  const storeTask = () => {
    if (newTask === "") return alert("New task is empty!");

    setTaskList([...taskList, { isComplete: false, task: newTask }]);
    setNewTask("");
  };

  // const markAsComplete(index) => {

  // }

  return (
    <>
      <h1>To-Do List Application</h1>

      <div className="add-task">
        <label>Add Task</label>
        <input
          type="text"
          placeholder="enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={storeTask}>Add</button>
      </div>

      <Task taskList={taskList} setTaskList={setTaskList} />
    </>
  );
}

export default App;
