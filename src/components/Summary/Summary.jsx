
import './Summary.css'

export function Summary() {
  return(
    <>
      <div className="tasks-summary">
          <div className="tasks">
            <strong> Tarefas criadas</strong>
            <div className="sumary">
              <strong>5</strong>
            </div>
          </div>

          <div className="tasks">
            <strong className="finished"> Tarefas concluidas</strong>
            <div className="sumary">
              <strong>2 de 5</strong>
            </div>
          </div>
        </div>
    </>
  )
}