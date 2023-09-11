
import messageEmpty from "../../assets/Clipboard.svg"

import "./EmptyTaskMessage.css"

export function EmptytaskMessage() {
  return(
    <>
      <div className="no-task__message">
          <img src= {messageEmpty} alt="emptyMessage" />
          <div className="content">
            <strong>Você ainda não tem tarefas cadastradas </strong> 
            <span>Crie tarefas e organize seus
            itens a fazer </span>
          </div>
        </div>
    </>
  )
}