import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//Icons
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  function handleClick(){
    setIsActive(current => !current)
  }

  return (
    <>
        <nav className="Navbar">
            <ul>
                <li><a href="/o-mnie">o mnie</a></li>
                <li><a href="/realizacje">realizacje</a></li>
            </ul>
            <img src='/logo.svg'/>
            <ul>
                <li><a href="/klienci">klienci</a></li>
                <li><a href="/oferty">oferty</a></li>
            </ul>
        </nav>
        <div className='Navbar-mobile'>
            <img src='/logo.svg'/>
            <button onClick={handleClick}><GiHamburgerMenu/></button>
        </div>
        <div className={isActive ? 'menu-on' : 'menu-off'}>
            <ul>
                <li><a href="/o-mnie">o mnie</a></li>
                <li><a href="/realizacje">realizacje</a></li>
                <li><a href="/klienci">klienci</a></li>
                <li><a href="/oferty">oferty</a></li>
            </ul>
        </div>
    </>
    )
}

export default Navbar