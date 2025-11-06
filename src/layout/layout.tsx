import './layout.sass'
import {Link, Outlet} from "react-router-dom";
import {useContext, useState} from "react";
import {LayoutContext, ListContext} from "../contexts.tsx";
import { ReactSVG } from 'react-svg'
import Hamburger from "hamburger-react";

export const Header = () => {
  const [mainMenuVisible, setMainMenuVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const closeMenus = () => {
    setMainMenuVisible(false)
    setSubMenuVisible(false)
  }
  const theme = useContext(LayoutContext);
  const projectList = useContext(ListContext);

  const mainMenu = (
    <>
      <h2 onClick={() => setMainMenuVisible(false)}>
        <Link to="/">Home</Link>
      </h2>
      <h2 onClick={() => setSubMenuVisible(!subMenuVisible)}>
        Projects
        <ReactSVG src="../icons/down-arrow.svg" wrapper={'span'}/>
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

  if (theme.is_mobile)
    return (
      <header>
        <div className={'mobile-header'}>
          <h1>
            <Link to="/">Hello there ✌️</Link>
          </h1>
          <Hamburger
            toggle={(value) => subMenuVisible ? closeMenus() : setMainMenuVisible(value)}
            toggled={mainMenuVisible}
          />
        </div>
        <div
          className={'mobile-item-list'}
          style={mainMenuVisible ? {display: "flex"} : {display: "none"}}
        >
          {subMenuVisible ? subMenu : mainMenu}
        </div>
      </header>
    )
  return (
    <header>
      <div className={"desktop-items"}>
        <h1>
          <Link to="/">Hello there ✌️</Link>
        </h1>
        {mainMenu}
      </div>
      <div
        className={"desktop-sub-items"}
        style={subMenuVisible? {display: "flex"} : {display: "none"}}
      >
        {subMenu}
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