import './layout.css'
import {Link, Outlet} from "react-router-dom";


export const Header = () => {
  return (
    <>
      <header>
        <h1>
          <a href="{% url 'home' %}">
            Hello there ✌️
          </a>
        </h1>
        <div className="menu-box">
          <div className="menuitem">
            <Link to="/">Home</Link>
          </div>
          <div className="menuitem">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="menuitem">
            <Link to="/about">About</Link>
          </div>
        </div>
      </header>
      <Outlet/>
    </>
  )
}

export const Layout = () => {
  return (
    <Header>

    </Header>
  )
}