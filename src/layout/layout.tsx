import './layout.css'
import {Link, Outlet} from "react-router-dom";
import {useContext} from "react";
import {LayoutContext} from "../contexts.tsx";
import { push as Menu } from 'react-burger-menu'


export const Header = () => {
  return (
    <header style={{display: "flex", justifyContent: "space-between"}}>
      <h1>
        <Link to="/">Hello there ✌️</Link>
      </h1>
      <Menu
        right
        width={'60%'}
      >
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </Menu>
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