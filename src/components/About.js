import React from 'react';
import robo2 from './css/robot2.jpg'
const About = () => {
    return (
        <div id="about" style={{ paddingTop: '50px', position:'relative' }}>
            <div style={{ width: '75%', border: 'solid', color: '#D3D3D3', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)', position:'relative', backgroundColor: '#D3D3D3', left:'12%'}}>
            <div style={{ height: '570px', width: '428px', left:'80px', top:'150px',  borderStyle: 'solid', borderWidth:'4px', color: 'black', position:'relative'}} />
            <img src={robo2} style={{ height: '570px', width: '428px',  position:'relative', left:'60px', bottom:'400px'  }} alt="cute-robot-2" />
            </div>
        </div>
    );
}

export default About;