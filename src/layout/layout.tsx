import './layout.css'
import {Link, Outlet} from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import {LayoutContext, ListContext} from "../contexts.tsx";
import { ReactSVG } from 'react-svg'
import Hamburger from "hamburger-react";

export const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [mainMenuVisible, setMainMenuVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const closeMenus = () => {
    setMainMenuVisible(false)
    setSubMenuVisible(false)
  }
  const theme = useContext(LayoutContext);
  const projectList = useContext(ListContext);

  useEffect(() => {
    if (ref.current)
      setHeaderHeight(ref.current.clientHeight);
  }, [ref]);

  if (theme.is_mobile) {
    const mainMenu = (
      <>
        <h2 onClick={() => setMainMenuVisible(false)}>
          <Link to="/">Home</Link>
        </h2>
        <h2 onClick={() => setSubMenuVisible(true)}>
          <ReactSVG src="./icons/down-arrow.svg" wrapper={'span'}/>
          Projects
        </h2>
        <h2 onClick={() => setMainMenuVisible(false)}>
          <Link to="/about">About</Link>
        </h2>
      </>
    );

    const subMenu = (
      <>
        {projectList.map(({title, type}, key) => (
          <h2 key={key}><Link to={"/" + type} onClick={() => closeMenus()}>{title}</Link></h2>
        ))}
      </>
    );

    return (
      <header>
        <div style={{display: "flex", justifyContent: "space-between", margin: "0.5rem 1rem", alignItems: "center"}}>
          <h1>
            <Link to="/">Hello there ✌️</Link>
          </h1>
          <Hamburger
            toggle={(value) => subMenuVisible ? closeMenus() : setMainMenuVisible(value)}
            toggled={mainMenuVisible}
          />
        </div>
        <div className={"navbar"} style={mainMenuVisible ? { display: "flex" } : {display: "none"}}>
          {subMenuVisible ? subMenu : mainMenu}
        </div>
      </header>
    )
  }
  return (
    <header>
      <div className={"menu-box"} id={"menu"} ref={ref}>
        <h1>
          <Link to="/">Hello there ✌️</Link>
        </h1>
        <div className={"menuitem"}>
          <Link to="/">Home</Link>
        </div>
        <div className={"menuitem open-menu-button"} onClick={() => setSubMenuVisible(!subMenuVisible)}>
          Projects
          <ReactSVG src="./icons/down-arrow.svg" wrapper={'span'}/>
        </div>
        <div className={"menuitem"}>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className={"menu-content"} style={{...{top: headerHeight}, ...(subMenuVisible? {display: "block"} : {display: "none"})}}>
        {projectList.map(({title, type}, key) => (
          <h2 key={key}><Link to={"/" + type} onClick={() => setSubMenuVisible(false)}>{title}</Link></h2>
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