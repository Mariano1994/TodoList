import "./Newtask.css"

export function NewTask() {
  return (
    <>
       <div className="input-task">
          <form>
            <input type="text" placeholder="Adicione nova tarefa" />
            <button>Criar</button>
          </form>
        </div>
    
    </>
  )
}