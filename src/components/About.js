import React from 'react';
import robo2 from './css/robot2.jpg'
import './css/navbar.css';

const About = () => {
    return (
        <div id="about" class="transition-swipe-about" >
            <div style={{ width: '75%', border: 'solid', color: 'white', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)', position:'relative', backgroundColor: 'white', left:'12%'}}>
            <div style={{ height: '447px', width: '428px', left:'80px', top:'150px',  borderStyle: 'solid', borderWidth:'4px', color: 'black', position:'relative'}} />
            <img src={robo2} style={{ height: '400px', width: '408px',  position:'relative', left:'60px', bottom:'230px'  }} alt="cute-robot-2" />
            </div>
        </div>
    );
}

export default About;