
import './App.css'

// Imagans
import todoLogo from "./assets/todo.svg"
import rocketLogo from "./assets/rocket.svg"

function App() {
  return (
    <>
      <header className='header'>
        <div className='logo'>
          <img src={rocketLogo} alt="rocketIlustrationLogo" />
          <img src={todoLogo} alt="" />
        </div>
      </header>
    </>
  )
}

export default App
