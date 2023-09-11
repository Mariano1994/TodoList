
import { Task } from "../Task/Task";
import "./TasksList.css"

export function TasksList({tasksData, onDeleteTask, onUPDateTaskStatus}) {
  return (
    <>
      <div className="list-tasks">
        <ul>
          {tasksData.map(task => {
            return (
              <Task task= {task} key={task.id} onDeleteTask={onDeleteTask} onUPDateTaskStatus={onUPDateTaskStatus}/>
            )
          })}
        
        </ul>
      </div>
    </>
  );
}
