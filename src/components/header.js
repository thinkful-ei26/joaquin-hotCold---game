import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import What from './what';
import Newgame from './newGame';


export default function Header(props){
return (
<div>
    <header  className='header'>
    <nav>
    <ul>
        <li className='what'> <What/></li>
        <li className='newgame'> <Newgame/></li>
    </ul>
     </nav>
<h1> HOT or COLD</h1>
    </header>

</div>
)
}