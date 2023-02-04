import React, { useState } from 'react'
import DrawerComp from './DrawerComp';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const Header = () => {
    const [value, setValue] = useState();
  return (
    <React.Fragment>
        <AppBar sx={{background: 'green'}}>
            <Toolbar sx={{color: 'white'}}>
                <Typography sx={{color: 'inherit'}}>
                    <SportsBasketballIcon sx={{marginRight: '.5em'}}/>
                </Typography>
                <h2>St. Martha Sports Ministry</h2>
                
                <Tabs sx={{marginLeft: 'auto'}} textColor='inherit' value={value} onChange={(e, value)=>{setValue(value)}} indicatorColor='secondary' TabIndicatorProps={{sx: {bgcolor: 'white'}}}>
                    <Tab label='Roster'/>
                    <Tab label='Schedule'/>
                    <Tab label='Results'/>
                    <Tab label='Information'/>
                </Tabs>
                
                <React.Fragment>
                    <Button sx={{marginLeft:'auto', backgroundColor: 'white', color: 'green', ':hover': {bgcolor: 'lightgreen'}}} variant="contained">Login</Button>
                    <Button sx={{marginLeft:'1em', backgroundColor: 'white', color: 'green',':hover': {bgcolor: 'lightgreen'}}} variant="contained">Register</Button>
                </React.Fragment>
            </Toolbar>
            <DrawerComp />
        </AppBar>
    </React.Fragment>
  )
}


// import React from 'react';
// import Logo from './Logo';
// import {Link} from 'react-router-dom'
// import './Header.css'

// const Header = () => {
//     return(
//         <>
//             <ul className="header-wrapper">
//                 <Logo className='header-element' />
//                 <Link to='/Roster'>Roster</Link>
//                 <Link to='/Schedule'>Schedule</Link>
//                 <Link to='/Results'>Results</Link>
//                 <Link to='/Information'>Information</Link>
//             </ul>
//         </>
// )}

export default Header;