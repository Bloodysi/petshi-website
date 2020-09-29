import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '../button/Button';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false)

  const closeMenu = () => setClick(false)

  const showButton = () => {
    window.innerWidth <= 960 ? setButton(true) : setButton(false)
  }

  window.addEventListener('resize', showButton)

  return (
    <nav>
      <div className='navbar__container'>
        <Link to='/' className='logo' onClick={()=> setClick(false)}>
          <i className="fas fa-spa"></i>
          PETSHI
        </Link>
        <div className='menu-icon' onClick={()=> setClick(!click)}>
          {click ? <i className="fas fa-times-circle"></i> : <i className="fas fa-bars"></i>}
        </div>
        <ul className={click ? 'navbar__links active' : 'navbar__links'}>
          <li className='navbar__link'>
            <Link to='/' onClick={()=> setClick(false)}>Home</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/know-us' onClick={()=> setClick(false)}>Know Us</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/donate' onClick={()=> setClick(false)}>Donate</Link>
          </li>
          <Button color='white' size={!button ? 'sm' : 'lg'} link='/join-us' onClick={closeMenu}>Join Us</Button>
        </ul>   
      </div>
    </nav>
  )
}

export default Navbar;