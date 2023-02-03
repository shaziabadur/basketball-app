import React from 'react';
import Header from './Header';
import Information from './Information';
import Roster from './Roster';
import Schedule from './PlayerCard';
import Results from './Results';
import {Route, Routes} from 'react-router-dom';
import './Parent.css'

const Parent = () => {
return (
    <div className='parent'>
        <Header className='header' />
        {/* <div className='parent-content'>
            <Routes>
                <Route path="/" element={<Information />} />
                <Route path="/Roster" element={<Roster />} />
                <Route path="/Schedule" element={<Schedule />} />
                <Route path="/Results" element={<Results />} />
                <Route path="/Information" element={<Information />} />
            </Routes>
        </div> */}
    </div>
);}

export default Parent;