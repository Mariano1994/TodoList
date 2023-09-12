import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { Summary } from "./components/Summary/Summary";
import { Divider } from "./components/Divider/Divider";
import { EmptytaskMessage } from "./components/EmptyTaskMessage/EmptyTaskMessage";
import { TasksList } from "./components/TasksList/TasksList";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddNewTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleUPDateTaskStatus(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed} : task
      )
    );
  }

  return (
    <>
      <Header />
      <NewTask onAddNewTask={handleAddNewTask} />

      <main className="content-wrapper">
        <Summary tasks={tasks} />

        <Divider />

        {tasks.length > 0 ? (
          <TasksList tasksData={tasks} onDeleteTask={handleDeleteTask} onUPDateTaskStatus={handleUPDateTaskStatus} />
        ) : (
          <EmptytaskMessage />
        )}
      </main>
    </>
  );
}

export default App;
