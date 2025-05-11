import './layout.css'
import {Link, Outlet} from "react-router-dom";
import {useContext} from "react";
import {LayoutContext} from "../contexts.tsx";


export const Header = () => {
  return (
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
  )
}

export const Layout = () => {
  const theme = useContext(LayoutContext);
  return (
    <>
      <Header/>
      <div className={'content ' + (theme.is_mobile ? 'content-mobile' : 'content-desktop')}>
        <Outlet/>
      </div>
    </>
  )
}