import "./App.css";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { Summary } from "./components/Summary/Summary";
import { Divider } from "./components/Divider/Divider";
import { EmptytaskMessage } from "./components/EmptyTaskMessage/EmptyTaskMessage";
import { TasksList } from "./components/TasksList/TasksList";
import { useState } from "react";

const tasksList = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mngjbu gbugubr gubbgurbk ljgjrbgb",
    completed: true,
  },

  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mngjbu gbugubr gubbgurbk ljgjrbgb",
    completed: true,
  },

  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mngjbu gbugubr gubbgurbk ljgjrbgb",
    completed: true,
  },

  {
    id: 4,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mngjbu gbugubr gubbgurbk ljgjrbgb",
    completed: false,
  },

  {
    id: 5,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mngjbu gbugubr gubbgurbk ljgjrbgb",
    completed: false,
  },

];

function App() {
  const [tasks, setTasks] =useState(tasksList)


  function handleAddNewTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]) 
  }

  return (
    <>
      <Header />
      <NewTask  onAddNewTask={handleAddNewTask}/>

      <main className="content-wrapper">
        <Summary tasks={tasks} />

        <Divider />

      {tasks.length > 0 ? <TasksList tasksData={tasks}/> : <EmptytaskMessage/> }
      </main>
    </>
  );
}

export default App;
