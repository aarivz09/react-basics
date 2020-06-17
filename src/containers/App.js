import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';


// React Hooks
// 1 change class to function
// remove render method
// remove state and clickHandler function
// import useState 
// useState returns array with two elements
// first element of the useState is current State
// the second element will be the updated state
// use always array destructuring for useState



class App extends Component {

  state = {
    people: [
      {
        id: 'asdfdfd', name: 'Manish', age: 24
      },
      {
        id: 'asdfasdf', name: 'Mohammed', age: 25
      },
      {
        id: 'asdffsf', name: 'Darpan', age: 20
      },
    ],

    showPeople: false,

  };




  clickHandler = (newName) => {
    this.setState({
      people: [
        {
          name: 'Manish Kumar', age: 34
        },
        {
          name: newName, age: 55
        },
        {
          name: 'Darpan', age: 20
        },
      ],


    });

    // this.state.people[0].name = "Singh";
  };

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.people.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.people[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.people];
    persons[personIndex] = person;


    this.setState({
      people: persons


    });


  }

  togglePersonHandler = () => {
    const canShow = this.state.showPeople;
    this.setState({ showPeople: !canShow })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.people];
    persons.splice(personIndex, 1);
    this.setState({ people: persons })
  }

  render() {




    let persons = null;
    if (this.state.showPeople) {
      persons =
        <Persons
          persons={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}


        />





    }





    return (


      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePersonHandler}
        />



        {persons}


      </div>

    );
  }

  // return (
  //   <h1>I am Darpan</h1>
  // );

  // return React.createElement('div', null, 'h1', 'Hi I am Manish');
  // return React.createElement('div', null, React.createElement('h1', null, 'I am Manish'));
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am Manish'));
  // null is simply an object or data
}

export default App;

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



