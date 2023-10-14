import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from 'react'
import './Header.scss'

const Header = () => {
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }  },[])

    window.addEventListener('scroll',
    console.log(window.scrollY);
    
  
  return (
    <>
        <nav className="header" ref={ref}>
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
