import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex">
      <Link to="/">Home</Link>
      <Link to="/join">join</Link>
      <Link to="/login">login</Link>
      <Link to="/board">board</Link>
    </nav>
  );
};

export default NavBar;
