import React from 'react';
import ReactDOM from 'react-dom';
import './gameBoard.css';


export default function Gameboard(props){
return (
<div className="gameboard">
   <div className="hotcold" placeholder="make a guess">Make a guess</div>
   <form className='guessArea'>
     <div className='guessArea'>
        <input type="text" placeholder="enter a guess"/>
        <button className='guessButton' name="guess">Guess</button>
    </div>
    <div className='guessCount'>
    Guess count goes here
    </div>
    <div className='guessLog'>
    Guess log goes here
    </div>
    </form>

</div>
)
}