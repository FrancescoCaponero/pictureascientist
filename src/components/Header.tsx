import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import './Header.scss'

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.scrollY > 200)
      );
    }
  }, []);
  return (
    <>
        <nav className={`header ${
          small ? "active-header" : ""
        }`}>
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
