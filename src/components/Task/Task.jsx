import trash from "../../assets/trash.svg"

import './Task.css'


export function Task({task}) {
  return (
    <>
      <li className='task'>
        {" "}
        <input type="checkbox" />
        <span className={task.completed? 'checked': ''}>
          {task.content}
        </span>
        {" "}
        <div><img src={trash} className='trashButton'/></div>
      </li>
    </>
  );
}
