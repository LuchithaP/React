import './style.css';
import reactLogo from "../images/react-1-logo-svg-vector.svg"

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src= {reactLogo} className="nav-logo" alt="Real Madrid Logo" />
        <h2 className="name">React Facts</h2>
        <ul className="nav-items">
          <li>React Course-project1</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;