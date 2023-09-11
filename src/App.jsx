import "./App.css";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { Summary } from "./components/Summary/Summary";
import {Divider} from './components/Divider/Divider'

function App() {
  return (
    <>
      <Header />
      <NewTask />

      <main className="content-wrapper">
        <Summary/>
        <Divider/>
      </main>
    </>
  );
}

export default App;
