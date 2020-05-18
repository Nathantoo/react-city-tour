import React from 'react';
import logo  from '../logo.png';

export default function Navbar() {
    return (
       <nav className='navbar'>
          <img src={logo} alt='city tour logo'/>
          <ul className='nav-items'>
             <li>
                 <a href='/' className='nav-link'>home</a>
             </li>
             <li>
                 <a href='/' className='nav-link'>abaut</a>
             </li>
             <li>
                 <a href='/' className='nav-link active'>tours</a>
             </li>
          </ul>
       </nav>
    )
}
