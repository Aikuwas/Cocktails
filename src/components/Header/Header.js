import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import LocalBarIcon from '@mui/icons-material/LocalBar';

const Header = () => {
    return (
        
        <>
        <header>
            <div className="container">
                <div className={s.header__nav}>
                <div className="logo">
                  <LocalBarIcon  />
                        </div>
                    <div className={s.nav__links}>
                    <NavLink to='/'>Main</NavLink>
                    <NavLink to='/search'>Search</NavLink>
                    <NavLink to='/pagination/a'>Alphabet</NavLink>
                    </div>
                    
                </div>
            </div>
        </header>
        </>
         
    );
};

export default Header;