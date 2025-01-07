
import './style.css';
import reactLogo from './images/reactlogo.png'


function Navbar() {
  return (
    <nav className="navbar">
      <img src= {reactLogo} className ='reactlogo' alt='react logo' />
      <h3 className="name">ReactFacts</h3>
      <h4 className='nav-items'>React Course-project 1</h4>
    </nav>
  );
}

export default Navbar;