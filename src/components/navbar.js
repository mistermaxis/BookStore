import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="header-logo">Bookstore CMS</h1>
      <menu className="main-menu">
        <NavLink activeClassName="active" to="/" exact>BOOKS</NavLink>
        <NavLink activeClassName="active" to="categories">CATEGORIES</NavLink>
      </menu>
      <button className="user-logo-container">
        <FontAwesomeIcon className="user-logo" icon={faUser} />
      </button>
    </nav>
  );
}

export default Navbar;