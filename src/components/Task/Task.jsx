import trash from "../../assets/trash.svg";

import "./Task.css";

export function Task({ task, onDeleteTask, onUPDateTaskStatus }) {
  return (
    <>
      <li className="task">
        {" "}
        <input type="checkbox" onClick={() => onUPDateTaskStatus(task.id)} />
        <span className={task.completed ? "checked" : ""}>
          {task.content}
        </span>{" "}
        <div>
          <img
            src={trash}
            className="trashButton"
            onClick={() => onDeleteTask(task.id)}
          />
        </div>
      </li>
    </>
  );
}
