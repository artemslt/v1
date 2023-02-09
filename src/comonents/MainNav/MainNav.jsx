import { Link } from "react-router-dom";
import { List } from "./MainNav.styled";

function MainNav() {
  return (
    <nav>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </List>
    </nav>
  );
}

export default MainNav;
