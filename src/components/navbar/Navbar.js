import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '../button/Button';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false)

  const showButton = () => {
    window.innerWidth <= 960 ? setButton(true) : setButton(false)
  }

  window.addEventListener('resize', showButton)

  return (
    <nav>
      <div className='navbar__container'>
        <Link to='/' className='logo'>
          <i class="fas fa-spa"></i>
          PETSHI
        </Link>
        <div className='menu-icon' onClick={()=> setClick(!click)}>
          {click ? <i class="fas fa-times-circle"></i> : <i class="fas fa-bars"></i>}
        </div>
        <ul className={click ? 'navbar__links active' : 'navbar__links'}>
          <li className='navbar__link'>
            <Link to='/'>Home</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/know-us'>Know Us</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/donate'>Donate</Link>
          </li>
          <Button color='white' size={!button ? 'sm' : 'lg'} link='/join-us'>Join Us</Button>
        </ul>   
      </div>
    </nav>
  )
}

export default Navbar;