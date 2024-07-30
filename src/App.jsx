import { useState } from 'react'
import './App.css'
//import Task from './components/Task';

function App() {

  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  // console.log(newTask);

  const storeTask = () => {
    if(newTask === "") return (alert("New task is empty!"));

    setTaskList([...taskList, newTask]);
    setNewTask('');
  }
  // console.log(taskList);

  return (
    <>
      <h1>To-Do List Application</h1>
      
      <div className='add task'>
        <label>Add Task: </label>
        <input type="text" placeholder='enter task' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={storeTask}>Add</button>
      </div>

      <div className="task-list">
        <h2>Task List</h2>
        {taskList.length === 0 ?(
          <div>No Tasks Available</div>
          ): (
            taskList.map((task, index) =>(
              <div key={index}>
                <p>{index + 1}. {task}</p>
              </div>
          ))
        )}
      </div>
    </>
  )
}

export default App
