import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game';
// Exercises
function formatUser(user){
    return user.firstName +' '+ user.lastName;
}

// DRILLS**************************
const user = {
    firstName: 'Hanga',
    lastName: 'Banga'
}
function getGreeting(user){
    if(user){
        return <h1>Hello {formatUser(user)}</h1>;
    }
    return 'Hello stranger';
}

// const element = (<h1>{getGreeting(user)}</h1>);
// function tich(){
//     const element = (
//         <div>
//         <h1>Hi</h1>
//         <h2>It is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     )
//     ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tich,1000);
function Welcome(props){
    return <h1>Welcome {props.name}</h1>
}

const foo = <Welcome name='Sarah'/>



// ===========================================

 ReactDOM.render(<Game/>, document.getElementById('root'));
// ReactDOM.render(foo, document.getElementById('root'));


