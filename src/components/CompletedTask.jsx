export default function CompletedTask({ completedTasks }) {
  return (
    <>
      <h2>Completed Tasks</h2>
      <div className="completed-task">
        {completedTasks.length === 0 ? (
          <div>No completed tasks</div>
        ) : (
          completedTasks.map((task, index) => (
            <div key={index}>
              <p>
                {index + 1}. {task}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
