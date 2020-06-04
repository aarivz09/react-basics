// function person(){
//     return <h1>HI i am a person from person component</h1>
// }

// var Person = function(){

// }

// es6

import React from 'react'
import './Person.css'
// every function component will have a default parameter called props (properties or attributes)

const person = (props) => {

    // return <h3>Hi I am Darpan and my age is{Math.round(Math.random() * 20)}</h3>
    return (
        <div className='Person'>
            <h3 onClick={props.click}>I am {props.name} and my age is {props.age} and studying in {props.college}</h3>
            <p>{props.children}</p>
        </div>

    )

}

export default person;



