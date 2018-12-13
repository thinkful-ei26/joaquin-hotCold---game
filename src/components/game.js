import React from 'react';
import Header from './header'
import Gameboard from './gameBoard';

export default class Game extends React.Component {
render(){
    return(
    <div>
    <Header/>
    <Gameboard/>

    </div>
    )
};

}