import React from 'react';
import './Home.css';
import doctorThinking from '../Images/doctorThinking.jpg';


const Home = () => {
    return(
        <div className='homeBody'>
            <h2>Help me fight the dark spirit to save Humanity</h2>
            <img src={doctorThinking} alt='Didier Raoult thinking' style={{width: 600, height: 300, borderRadius: 20}} />
        </div>
    )
}

export default Home;