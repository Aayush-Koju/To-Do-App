import CompletedTask from "./CompletedTask";
import "./Task.css";

export default function Task({ taskList, setTaskList }) {
  // const [completedTasks, setCompletedTasks] = useState([]);
  const remove = (index) => {
    setTaskList((prevTaskList) => prevTaskList.filter((_, i) => i !== index));
  };

  const complete = (index) => {
    if (!taskList[index].isComplete) {
      const updatedTaskList = [...taskList];
      updatedTaskList[index].isComplete = true;
      setTaskList(updatedTaskList);
      // remove(index);
      getClassName(index);
    }
    // console.log(completedTasks.includes(completedTasks[index]));
  };

  const getClassName = (index) => {
    return taskList[index].isComplete ? "line" : "no-line";
  };

  return (
    <>
      <div className="task-list">
        <h2>Task List</h2>
        {taskList.length === 0 ? (
          <div>No Tasks Available</div>
        ) : (
          taskList.map((taskObj, index) => (
            <div key={index}>
              <p>
                {index + 1}. {taskObj.task}
              </p>
              <button onClick={() => remove(index)}>Remove</button>
              <button onClick={() => complete(index)}>Mark as complete</button>
            </div>
          ))
        )}
      </div>
      <CompletedTask taskList={taskList} />
    </>
  );
}
