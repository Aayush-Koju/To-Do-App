import { useState } from "react";

export default function Task({ taskList, setTaskList }) {
  const [completedTask, setCompletedTask] = useState([]);
  const remove = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const complete = (index) => {
    setCompletedTask(...completedTask, taskList[index]);
    //remove code
  };

  console.log(setCompletedTask);

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {taskList.length === 0 ? (
        <div>No Tasks Available</div>
      ) : (
        taskList.map((task, index) => (
          <div key={index}>
            <p>
              {index + 1}. {task}
            </p>
            <button onClick={() => remove(index)}>Remove</button>
            <button onClick={() => complete(index)}>Mark as complete</button>
          </div>
        ))
      )}
    </div>
  );
}
