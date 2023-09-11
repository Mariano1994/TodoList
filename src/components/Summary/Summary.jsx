
import './Summary.css'

export function Summary({tasks}) {

  const totalTasks = tasks.length
  const totalCompletedTasks = tasks.filter(task => task.completed).length
  
  return(
    <>
      <div className="tasks-summary">
          <div className="tasks">
            <strong> Tarefas criadas</strong>
            <div className="sumary">
              <strong>{totalTasks}</strong>
            </div>
          </div>

          <div className="tasks">
            <strong className="finished"> Tarefas concluidas</strong>
            <div className="sumary">
              <strong>{totalCompletedTasks} de {totalTasks}</strong>
            </div>
          </div>
        </div>
    </>
  )
}