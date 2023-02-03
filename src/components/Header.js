import React from 'react';
import Logo from './Logo';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return(
        <>
            <ul className="header-wrapper">
                <Logo className='header-element' />
                <Link to='/Roster'>Roster</Link>
                <Link to='/Schedule'>Schedule</Link>
                <Link to='/Results'>Results</Link>
                <Link to='/Information'>Information</Link>
            </ul>
        </>
)}

export default Header;