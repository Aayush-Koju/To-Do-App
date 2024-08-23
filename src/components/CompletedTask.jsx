import { useEffect, useState } from "react";
import "./CompletedTask.css";

export default function CompletedTask({ taskList, setTaskList }) {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    setCompletedTasks(taskList.filter((element) => element.isComplete));
  }, [taskList]);

  const clearCompletedTask = () => {
    const newTaskList = taskList.filter((task) => !task.isComplete);
    setTaskList(newTaskList);
    setCompletedTasks([]);
  };

  return (
    <>
      <div className="completed-task">
        <h2>Completed Tasks</h2>
        {completedTasks.length === 0 ? (
          <div>No completed tasks</div>
        ) : (
          <ul>
            <button onClick={clearCompletedTask}>Clear</button>
            {completedTasks.map((taskObj, index) => (
              <li key={index} className="line">
                {taskObj.task}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
