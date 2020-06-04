import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// React Hooks
// 1 change class to function
// remove render method
// remove state and clickHandler function
// import useState 
// useState returns array with two elements
// first element of the useState is current State
// the second element will be the updated state
// use always array destructuring for useState

const app = () => {


  // creating state using useState
  const [peopleState, setPeopleState] = useState({
    people: [
      {
        name: 'Manish', age: 24
      },
      {
        name: 'Mohammed', age: 25
      },
      {
        name: 'Darpan', age: 20
      },
    ],

    newState: "this is a newdata"

  });

  console.log(peopleState);

  const [collegeState, setCollegeState] = useState({
    college: 'Stanford'
  });

  const clickHandler = () => {
    setPeopleState({
      people: [
        {
          name: 'Manish Kumar', age: 34
        },
        {
          name: 'Mohammed', age: 55
        },
        {
          name: 'Darpan', age: 20
        },
      ],
      newState: "this is a newdata"


    })

    setCollegeState({
      college: 'MIT'
    })

    // this.state.people[0].name = "Singh";
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Mohammed.me</h1>

      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>



      {/* here name and age are properties or attributes */}
      {/* <Person name='SteveJobs' age='30'>Hobbies: Programming</Person>
        <Person name='Turing' age='28'></Person>
        <Person name='Jack' age='25'>Hobbies: Music</Person>
        <Person name='Dorsey' age='35'></Person> */}

      <button onClick={clickHandler}>Change Details</button>
      <Person name={peopleState.people[0].name} age={peopleState.people[0].age} college={collegeState.college}>Hobbies: Programming, Learn New things</Person>
      <Person name={peopleState.people[1].name} age={peopleState.people[1].age} college={collegeState.college}></Person>
      <Person name={peopleState.people[2].name} age={peopleState.people[2].age} college={collegeState.college}></Person>


    </div>
  );

  // return (
  //   <h1>I am Darpan</h1>
  // );

  // return React.createElement('div', null, 'h1', 'Hi I am Manish');
  // return React.createElement('div', null, React.createElement('h1', null, 'I am Manish'));
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am Manish'));
  // null is simply an object or data


}


export default app;

// STATE
// CLASS IS NOTHING BUT A BLUEPRINT WHICH HOLD PROPERTIES (VARIABLES/OBJECTS) AND METHODS (FUNCTIONS)
// STATE: INSTEAD OF STORING DATA INSIDE THE ELEMENTS, HERE WE STORE DATA AS OBJECTS

// NOTE: IT WORKS ONLY FOR CLASSES THAT EXTENDS COMPONENTS, AND DOES NOT WORK FOR FUNCTION COMPONENTS
// so the difference between props and states is, state works internally from class and props are passed from fuctions

// REACT HOOKS : FROM REACT 16.08, USING REACT HOOKS WE CAN USE STATE ON FUNCTION COMPONENTS ALSO.

// NOTE: IF STATE CHANGES, IT WILL LEAD REACT TO RE-RENDER OR RELOADING OUR DOM TO UPDATE



/*
 STATEFULL COMPONENTS VS STATELESS COMPONENTS
 The component which manages state is called STATEFUL COMPONENT
 also called SMART COMPONENT OR CONTAINER COMPONENT
EG: APP COMPONENT

STATELESS COMPONENT:
The component which does not have any state
ALSO CALLED DUMB COMPONENT OR PRESENTATIONAL COMPONENT
Eg: Person


BEST PRACTICE : Use always more stateless components.




*/



