
import './Summary.css'

export function Summary() {
  return(
    <>
      <div className="tasks-summary">
          <div className="tasks">
            <span> Tarefas criadas</span>
            <div className="sumary">
              <span>0</span>
            </div>
          </div>

          <div className="tasks">
            <span className="finished"> Tarefas concluidas</span>
            <div className="sumary">
              <span>0</span>
            </div>
          </div>
        </div>
    </>
  )
}