// function person(){
//     return <h1>HI i am a person from person component</h1>
// }

// var Person = function(){

// }

// es6

import React from 'react';
import './Person.css';
import Radium from 'radium';
import { StyleRoot } from 'radium';

// every function component will have a default parameter called props (properties or attributes)

const person = (props) => {

    const style = {
        '@media(min-width:500px)': {

            width: '450px',
        }
    }

    // return <h3>Hi I am Darpan and my age is{Math.round(Math.random() * 20)}</h3>
    return (


        <div className='Person' style={style}>
            <h3 onClick={props.click}>I am {props.name} and my age is {props.age} and  studying in {props.college}</h3>
            <button onClick={props.delete}>Delete</button>
            <p>{props.children}</p>
            <input type='text' onChange={props.changeName} value={props.name}></input>
        </div>


    )

}

export default Radium(person);






