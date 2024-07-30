import { useState } from 'react'
import './App.css'
//import Task from './components/Task';

function App() {

  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  // console.log(newTask);

  const storeTask = () => {
    setTaskList([...taskList, newTask]);
    setNewTask('');
    console.log(taskList);
  }

  return (
    <>
      <h1>To-Do List Application</h1>
      
      <div className='add task'>
        <label>Add Task: </label>
        <input type="text" placeholder='enter task' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={storeTask}>Add</button>
      </div>

      <div className="task-list">
      
      </div>
    </>
  )
}

export default App
