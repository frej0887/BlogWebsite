import './layout.css'
import {Link, Outlet} from "react-router-dom";


export const Header = () => {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Hello there ✌️</Link>
        </h1>
        <div className={"menu-box"}>
          <div className={"menuitem"}>
            <Link to="/">Home</Link>
          </div>
          <div className={"menuitem"}>
            <Link to="/projects">Projects</Link>
          </div>
          <div className={"menuitem"}>
            <Link to="/about">About</Link>
          </div>
        </div>
      </header>
    </>
  )
}

export const Layout = () => {
  return (
    <>
      <Header/>
      <div className={"content"}>
        <Outlet/>
      </div>
    </>
  )
}