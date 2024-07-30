import React from 'react';
import './App.css'

function App() {


  return (
    <>
      <h1>To-Do List Application</h1>
      
      <div className='add task'>
        <label>Add Task: </label>
        <input type="text" placeholder='enter task'/>
        <button>Add</button>
      </div>
    </>
  )
}

export default App
