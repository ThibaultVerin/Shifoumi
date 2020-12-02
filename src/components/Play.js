import React, { useState } from 'react';
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

    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [isWinner, setIsWinner] = useState('');
    //const [playerCounter, setPlayerCounter] = useState

    const randomPick = () => {
        setComputerChoice(Math.floor(Math.random() * 3));
        console.log(playerChoice);
        console.log(Math.floor(Math.random() * 3));
        if (playerChoice === computerChoice){
            setIsWinner('Draw')
            console.log('Draw')
        }else if ((playerChoice === 0 && computerChoice === 2) || (playerChoice === 1 && computerChoice === 0) || (playerChoice === 2 && computerChoice === 1)){
            setIsWinner("You win")
            console.log("You win")
        } else{
            setIsWinner("You loose")
            console.log("You loose")
        }
    }

    return(
        <div className='playBody'>
            <h1>Challenge me if you dare !</h1>
            <div>{isWinner}</div>
            <div className='playPart'>
                <div className="playerChoice">
                    <img src={paper} alt={paper} className="playerWeapon" onClick={() => {setPlayerChoice(0); randomPick()}} />
                    <img src={cisors} alt={cisors} onClick={() => {setPlayerChoice(1); randomPick()}} />
                    <img src={rock} alt={rock} onClick={() => {setPlayerChoice(2); randomPick()}} />
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


// Step 1 : Reconnaitre le click:
// -> creation state choix du player
// -> onClick={() => setPlayerChoice()} pour mettre à jour le state.

// Step 2 : Au click donner un state d'une valeur aléatoire pour l'ordi
// -> creer state computer
// -> creer un random number entre 0 et 2 pour le choix de l'ordi --> console.log en premier puis mettre à jour le state.
// -> Math.floor(Math.random() * Math.floor(3))

// Step 3 : définir en fonction des 2 states liés aux choix 
// -> création d'un state isWinner pour savoir si l'utilisateur gagne
// -> création conditions 