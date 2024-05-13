import React from 'react';
import { NavLink } from 'react-router-dom'; // import NavLink dari react-router-dom
import "../component/Navbar.css";
import Img from '../images/Gamukis.png';

const Navbar = ({ src, alt }) => {
  return (
    <div className="fContainer">
      <nav className="wrapper">
        <div className='ImgContainer'>
          <div className='ImgContainer-2'>
            <img src={Img} alt={alt} className="Img" />
          </div>
        </div>
        
        <ul className='navigation'>
          <li><NavLink exact to="/home" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/game" activeClassName="active">Game</NavLink></li>
          <li><NavLink to="/tutorial" activeClassName="active">Tutorial</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        </ul>

        <button className='btn-login'><NavLink to="/login" className="Navlink"><b>Login</b></NavLink></button>
      </nav>
    </div>
  );
}

export default Navbar;

