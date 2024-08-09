import { useState } from "react";
import CompletedTask from "./CompletedTask";
import "./Task.css";

export default function Task({ taskList, setTaskList }) {
  const [completedTasks, setCompletedTasks] = useState([]);
  const remove = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const complete = (index) => {
    if (!completedTasks.includes(completedTasks[index])) {
      setCompletedTasks([...completedTasks, taskList[index]]);
      // remove(index);
      getClassName(index);
    }
    console.log(completedTasks.includes(completedTasks[index]));
  };

  const getClassName = (index) => {
    return completedTasks.includes(index) ? "line" : "no-line";
  };

  return (
    <>
      <div className="task-list">
        <h2>Task List</h2>
        {taskList.length === 0 ? (
          <div>No Tasks Available</div>
        ) : (
          taskList.map((task, index) => (
            <div key={index}>
              <p className={getClassName()}>
                {index + 1}. {task}
              </p>
              <button onClick={() => remove(index)}>Remove</button>
              <button onClick={() => complete(index)}>Mark as complete</button>
            </div>
          ))
        )}
      </div>
      <CompletedTask completedTasks={completedTasks} />
    </>
  );
}
