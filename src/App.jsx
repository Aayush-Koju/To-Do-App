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

  const remove = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
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
        <h2>Task List</h2>
        {taskList.length === 0 ?(
          <div>No Tasks Available</div>
        ): (
          taskList.map((task, index) =>(
            <div key={index}>
              <p>{index + 1}. {task}</p>
              <button onClick={() => remove(index)}>Remove</button>
              <button>Mark as complete</button>
            </div>
          )))}
      </div>
    </>
  )
}

export default App
