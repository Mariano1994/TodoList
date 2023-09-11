import "./App.css";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { Summary } from "./components/Summary/Summary";
import { Divider } from "./components/Divider/Divider";
import { EmptytaskMessage } from "./components/EmptyTaskMessage/EmptyTaskMessage";



function App() {
  return (
    <>
      <Header />
      <NewTask />

      <main className="content-wrapper">
        <Summary />

        <Divider />
        
        <EmptytaskMessage/>

      </main>
    </>
  );
}

export default App;
