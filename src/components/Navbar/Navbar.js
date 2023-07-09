import React from "react";
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="row">
            <div className="nav col-12">
                <NavLink className={({isActive}) => isActive ? 'nav__item nav__item--active' : 'nav__item'} to='/'>Dashboard</NavLink>
                <NavLink className={({isActive}) => isActive ? 'nav__item nav__item--active' : 'nav__item'} to='/graph'>Graf</NavLink>
                <NavLink className={({isActive}) => isActive ? 'nav__item nav__item--active' : 'nav__item'} to='/chart'>Wykres</NavLink>
                <NavLink className={({isActive}) => isActive ? 'nav__item nav__item--active' : 'nav__item'} to='/table'>Tabela</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
