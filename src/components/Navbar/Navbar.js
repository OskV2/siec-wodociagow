import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

import Close from "../../img/close.svg";
import Burger from "../../img/burger.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <div className={'nav__items ' + (isOpen ? 'nav__items--active' : 'nav__items--inactive ')}>
      <NavLink className={({isActive}) => isActive ? 'nav__item nav__item--active' : 'nav__item'} to='/'>Dashboard</NavLink>
      <NavLink className={({isActive}) => isActive ? 'nav__item nav__item--active' : 'nav__item'} to='/graph'>Graf</NavLink>
      <NavLink className={({isActive}) => isActive ? 'nav__item nav__item--active' : 'nav__item'} to='/chart'>Wykres</NavLink>
      <NavLink className={({isActive}) => isActive ? 'nav__item nav__item--active' : 'nav__item'} to='/table'>Tabela</NavLink>
    </div>
  )

  return (
    <header>
      <nav className="d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="nav col-12">
              {navLinks}
            </div>
          </div>
        </div>
      </nav>

      <nav className="d-block d-lg-none">
        <div className="container">
          <div className="row">
            <div className="nav col-12">
              <img className="nav__button" src={isOpen ? Close : Burger} onClick={() => setIsOpen(!isOpen)} />
              {navLinks}
            </div>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Navbar;
