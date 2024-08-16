import "./CompletedTask.css";

export default function CompletedTask({ taskList }) {
  const completedTasks = taskList.filter((element) => element.isComplete);
  console.log(completedTasks);

  return (
    <>
      <h2>Completed Tasks</h2>
      <div className="completed-task">
        {completedTasks.length === 0 ? (
          <div>No completed tasks</div>
        ) : (
          completedTasks.map((taskObj, index) => (
            <ul key={index} className="line">
              <li>{taskObj.task}</li>
            </ul>
          ))
        )}
      </div>
    </>
  );
}
