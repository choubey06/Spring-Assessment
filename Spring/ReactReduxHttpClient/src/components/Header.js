import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h2>IBM</h2>
        <h4>CRUD Application</h4>
        <div className='header__nav'>
            <NavLink to='/' activeClassName='activeNav' exact={true}>Dashboard</NavLink>
            <NavLink to='/add' activeClassName='activeNav'>Add Book</NavLink>
        </div>
    </header>
);

export default Header;