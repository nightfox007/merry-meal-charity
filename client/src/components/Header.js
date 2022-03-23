import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/MerryMeal_Logo.png'
import { HeaderItems } from './HeaderItem'
import DropDown from './DropDown'

function Header() {
  const [dropdown, setDropdown] = useState(false)

  return (
    <div>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <img src={Logo} alt='' style={{ height: '20%', width: '30%' }} />
        </Link>

        <ul className='nav-items'>
          {HeaderItems.map((item) => {
            if (item.title === 'Give Help') {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  {dropdown && <DropDown />}
                  <Link to={item.path}>{item.title}</Link>
                </li>
              )
            }

            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Header
