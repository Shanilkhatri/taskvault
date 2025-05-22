import { useTaskStore } from "../store/taskStore"

function TasklistComponent() {
    const { tasks, addTask } = useTaskStore()
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
      <button onClick={() => addTask("New Task")}>Add Task</button>
    </div>
  )
}

export default TasklistComponent
