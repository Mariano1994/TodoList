// Imagans
import todoLogo from "../../assets/todo.svg"
import rocketLogo from "../../assets/rocket.svg";

import "./Header.css"

export function Header() {
  return(
    <>
       <header className="header">
        <div className="logo">
          <img src={rocketLogo} alt="rocketIlustrationLogo" />
          <img src={todoLogo} alt="" />
        </div>
      </header>
    </>
  )
}