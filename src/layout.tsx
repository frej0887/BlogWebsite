import './layout.css'


export function Header() {
  return (
    <header>
      <h1>
        <a href="{% url 'home' %}">
          Hello there ✌️
        </a>
      </h1>
      <div className="menubox">
        <div className="menuitem">
          <a href="{% url 'home' %}">
            Home
          </a>
        </div>
        <div className="menuitem">
          <a href="{% url 'projects' %}">
            Projects
          </a>
        </div>
        <div className="menuitem">
          <a href="{% url 'about' %}">
            About
          </a>
        </div>
      </div>
    </header>
  )
}