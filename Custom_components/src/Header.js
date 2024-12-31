
import './index.css';

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="../images/Real-Madrid-Symbol.png" className="nav-logo" alt="Real Madrid Logo" />
        <h2 className="name">Hala Madrid</h2>
        <ul className="nav-items">
          <li>Team</li>
          <li>Legacy</li>
          <li>Shop</li>
        </ul>
      </nav>
    </header>
  );
}

