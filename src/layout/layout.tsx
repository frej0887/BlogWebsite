import './layout.css'
import {Link, Outlet} from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import {LayoutContext, ListContext} from "../contexts.tsx";
import { ReactSVG } from 'react-svg'
import Hamburger from "hamburger-react";

export const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);
  const theme = useContext(LayoutContext);
  const projectList = useContext(ListContext);

  useEffect(() => {
    if (ref.current)
      setHeaderHeight(ref.current.clientHeight);
  }, [ref]);

  if (theme.is_mobile)
    return (
      <header>
        <div style={{display: "flex", justifyContent: "space-between", margin: "0.5rem 1rem", alignItems: "center"}}>
          <h1>
            <Link to="/">Hello there ✌️</Link>
          </h1>
          <Hamburger
            toggle={setMenuVisible}
            toggled={menuVisible}
          />
        </div>
        <div className={"navbar"} style={menuVisible ? { display: "flex" } : {display: "none"}}>
          <h1>
            <Link to="/" onClick={() => setMenuVisible(false)}>Home</Link>
          </h1>
          {projectList.map(({title}, key) => (
            <h2 key={key}><Link to={"/" + key} onClick={() => setMenuVisible(false)}>{title}</Link></h2>
          ))}
          <h1>
            <Link to="/about" onClick={() => setMenuVisible(false)}>About</Link>
          </h1>
        </div>
      </header>
    )
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
        {projectList.map(({title}, key) => (
          <h2 key={key}><Link to={"/" + key} onClick={() => setMenuVisible(false)}>{title}</Link></h2>
        ))}
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