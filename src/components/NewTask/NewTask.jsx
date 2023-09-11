import { useState } from "react";
import "./Newtask.css";

export function NewTask({ onAddNewTask }) {
  const [newTask, setNewTask] = useState("");

  function handleAddNewTask(event) {
    event.preventDefault();

    const NewTasks = {
      id: Math.random().toString(),
      content: newTask,
      completed: false,
    };

    onAddNewTask(NewTasks);

    setNewTask("");
  }

  return (
    <>
      <div className="input-task" onSubmit={handleAddNewTask}>
        <form>
          <input
            required
            type="text"
            placeholder="Adicione nova tarefa"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button>Criar</button>
        </form>
      </div>
    </>
  );
}
