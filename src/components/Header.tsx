import { NavLink } from "react-router-dom";
import './Header.scss'

const Header = () => {
  return (
    <>
        <nav className="header">
        <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/about">About</NavLink>
            </li>
            <li>
            <NavLink to="/picture-a-scientist">Picture A Scientist</NavLink>
            </li>
        </ul>
        </nav>
        <div className="spacer"></div>
    </>
  );
};

export default Header;
