import "./CompletedTask.css";

export default function CompletedTask({ taskList }) {
  const completedTasks = taskList.filter((element) => element.isComplete);
  console.log(completedTasks);

  return (
    <>
      <div className="completed-task">
        <h2>Completed Tasks</h2>
        {completedTasks.length === 0 ? (
          <div>No completed tasks</div>
        ) : (
          <ul>
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
