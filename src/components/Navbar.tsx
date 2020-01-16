import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
  <nav>
    <div className='nav-wrapper purple darken-2 px1'>
      <a href='/' className='brand-logo'>
        ReactTS
      </a>
      <ul className='right hide-on-med-and-down'>
        <li>
          <NavLink to='/'>Планування задач</NavLink>
        </li>
        <li>
          <NavLink to='/formik-yup'>Формік</NavLink>
        </li>
        <li>
          <NavLink to='/about'>Інформація</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
