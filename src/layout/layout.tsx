import './layout.css'
import {Link, Outlet} from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import {LayoutContext} from "../contexts.tsx";
import { ReactSVG } from 'react-svg'

export const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (ref.current)
      setHeaderHeight(ref.current.clientHeight);
  }, [ref]);

  return (
    <header>
      <div className={"menu-box"} id={"menu"} ref={ref}>
        <h1>
          <Link to="/">Hello there ✌️</Link>
        </h1>
        <div className={"menuitem"}>
          <Link to="/">Home</Link>
        </div>
        <div className={"menuitem open-menu-button"} onClick={() => setMenuVisible(!menuVisible)}>
          Projects
          <ReactSVG src="./icons/dropdown-arrow.svg" wrapper={'span'}/>
        </div>
        <div className={"menuitem"}>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className={"menu-content"} style={{...{top: headerHeight}, ...(menuVisible? {display: "block"} : {display: "none"})}}>
        <div><Link to={"/projects"} onClick={() => setMenuVisible(false)}>Projects</Link></div>
        <div><Link to={"/recipes"} onClick={() => setMenuVisible(false)}>Recipes</Link></div>
        <div><Link to={"/origami"} onClick={() => setMenuVisible(false)}>Origami</Link></div>
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