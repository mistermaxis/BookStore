import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>
        Bookstore
      </h1>
      <Link to="/">Home</Link>
      <Link to="categories">Categories</Link>
    </nav>
  );
}

export default Navbar;