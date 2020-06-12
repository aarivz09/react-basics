import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';


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

    // this.setState({
    //   people: [
    //     {
    //       name: 'Manish Kumar', age: 34
    //     },
    //     {
    //       name: event.target.value, age: 55
    //     },
    //     {
    //       name: 'Darpan', age: 20
    //     },
    //   ],


    // });
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

    const mystyle = {
      backgroundColor: 'red',
      padding: '20px',
      border: '5px solid blue',
      color: 'white',
      ':hover': {
        backgroundColor: 'green',
        color: 'black',
      }


    }

    let persons = null;
    if (this.state.showPeople) {
      persons = (
        <div>

          {this.state.people.map((person, index) => {
            return <Person
              name={person.name}
              delete={() => this.deletePersonHandler(index)}
              changeName={(event) => this.nameChangeHandler(event, person.id)}
              age={person.age}
              key={person.id}


            />
          })}
          {/* <Person
            click={() => this.clickHandler('Jack Dorsey')}
            name={this.state.people[0].name}
            age={this.state.people[0].age}
          >Hobbies: Programming, Learn New things</Person>
          <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age}
            changeName={this.nameChangeHandler}
          ></Person>
          <Person
            name={this.state.people[2].name}
            age={this.state.people[2].age}

          ></Person> */}
        </div>
      );

      mystyle.backgroundColor = 'blue';
      mystyle[':hover'] = {
        backgroundColor: 'orange',
        color: 'white'
      }
    }


    // const a = {
    //   name: 'aariv',
    // }
    // console.log('a object is ', a);

    // const b = [...a];
    // b.name = 'manish';

    // console.log('b object is ', b);
    // console.log('a object is ', a);

    // let assignedclasses = ['red', 'bold', 'body'].join(' '); // red bold body
    let assignedclasses = [];
    console.log(assignedclasses);

    if (this.state.people.length <= 2) {
      assignedclasses.push('bold');
    }

    if (this.state.people.length <= 1) {
      assignedclasses.push('red');
    }

    let headclass = ['App'].join(' ');



    return (

      <div className={headclass}>
        <header className="App-header">
          <h1>Welcome to Mohammed.me</h1>
        </header>
        <p className={assignedclasses.join(' ')}>
          hi i am Mohammed, I am freelancer and a software engineer
        </p>



        {/* here name and age are properties or attributes */}
        {/* <Person name='SteveJobs' age='30'>Hobbies: Programming</Person>
        <Person name='Turing' age='28'></Person>
        <Person name='Jack' age='25'>Hobbies: Music</Person>
        <Person name='Dorsey' age='35'></Person> */}

        {/* <button onClick={this.clickHandler.bind(this, 'Jack Dorsey')}>Change Details</button> */}
        {/* <button style={mystyle} onClick={() => this.clickHandler('Steve Jobs')}>Toggle Details</button> */}

        <button style={mystyle} onClick={this.togglePersonHandler}>Toggle Details</button>

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

export default Radium(App);

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



