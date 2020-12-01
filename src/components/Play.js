import React from 'react';
import './Play.css';
import paper from '../Images/paper.png';
import cisors from '../Images/cisors.png';
import rock from '../Images/rock.png';
import paperReverse from '../Images/paperReverse.png';
import cisorsReverse from '../Images/cisorsReverse.png';
import rockReverse from '../Images/rockReverse.png';
import jesus from '../Images/jesus.jpg';
import doctor from '../Images/doctor.jpg';

const Play = () => {
    return(
        <div className='playBody'>
            <h1>Challenge me if you dare !</h1>
            <div className='playPart'>
                <div className="playerChoice">
                    <img src={paper} alt={paper} className="playerWeapon"/>
                    <img src={cisors} alt={cisors} />
                    <img src={rock} alt={rock} />
                </div>
                <img src={doctor} alt={doctor} className='avatarimg'  style={{width: 300, height: 400, position: 'absolute', left: 50, bottom: 150, borderRadius:20}} />
                <div className="scorePartDoctor"><h2>Score :</h2></div>
                <div className="computerChoice">
                    <img src={paperReverse} alt={paperReverse} className="playerWeapon"/>
                    <img src={cisorsReverse} alt={cisorsReverse} />
                    <img src={rockReverse} alt={rockReverse} />
                </div>
                <img src={jesus} alt={jesus} style={{width: 300, height: 400, position: 'absolute', right: 50, bottom: 150, borderRadius: 20 }}/>
                <div className="scorePartJesus"><h2>Score :</h2></div>
            </div>
        </div>
    )
}

export default Play;