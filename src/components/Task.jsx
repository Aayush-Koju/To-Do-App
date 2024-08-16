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

  const tasksAvailable = () => {
    return (
      taskList.length === 0 || taskList.every((taskObj) => taskObj.isComplete)
    );
  };

  return (
    <>
      <div className="tasks">
        <div className="task-list">
          <h2>Task List</h2>
          {tasksAvailable() ? (
            <div>No Tasks Available</div>
          ) : (
            taskList.map((taskObj, index) => {
              if (!taskObj.isComplete) {
                return (
                  <ul key={index} className="no-line">
                    <li>{taskObj.task}</li>
                    <button onClick={() => remove(index)}>Remove</button>
                    <button onClick={() => complete(index)}>
                      Mark as complete
                    </button>
                  </ul>
                );
              }
              return null;
            })
          )}
        </div>
        <CompletedTask taskList={taskList} />
      </div>
    </>
  );
}
