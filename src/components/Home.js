import React from 'react';
import robo from './css/robot.jpg';
import './css/navbar.css';


const Home = () => {
    return (
        <div id="home" class="transition-swipe" style={{position: 'relative',textAlign: 'center',backgroundColor: 'black', paddingTop:'50px'}}>
            <img src={robo} style={{height:'900px', filter:'blur(7px)'}} alt="cute-robot"/>
            {/* <div style={{position: 'absolute', top: '50%', left: '18%',height:'100px', width:'750px', backgroundColor:'black', opacity:'0.5',border:'1px 1px 2px 2px', borderRadius:'10px'}}/> */}
            <p style={{position: 'absolute', top: '40%', left: '20%', fontSize:'80px', color:'black', borderBottom:'solid', borderTop:'solid', borderBottomColor:'black', borderTopColor:'black'}}>LalitAditya Divakarla</p>
            </div>
        );
}

export default Home;