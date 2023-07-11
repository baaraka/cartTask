import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBarContainer">
        <Link className="link" to="/">
          <span>Home</span>
        </Link>
        <Link className="link" to="/cart">
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
