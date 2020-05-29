import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
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

    college: 'Stanford'
  }

  clickHandler = () => {
    this.setState({
      people: [
        {
          name: 'Manish Kumar', age: 24
        },
        {
          name: 'Mohammed', age: 25
        },
        {
          name: 'Darpan', age: 26
        },
      ],
      college: 'harward'

    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>



        {/* here name and age are properties or attributes */}
        {/* <Person name='SteveJobs' age='30'>Hobbies: Programming</Person>
        <Person name='Turing' age='28'></Person>
        <Person name='Jack' age='25'>Hobbies: Music</Person>
        <Person name='Dorsey' age='35'></Person> */}

        <button onClick={this.clickHandler}>Click Here</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} college={this.state.college}></Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}></Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}></Person>


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
}

export default App;

// STATE
// CLASS IS NOTHING BUT A BLUEPRINT WHICH HOLD PROPERTIES (VARIABLES/OBJECTS) AND METHODS (FUNCTIONS)
// STATE: INSTEAD OF STORING DATA INSIDE THE ELEMENTS, HERE WE STORE DATA AS OBJECTS

// NOTE: IT WORKS ONLY FOR CLASSES THAT EXTENDS COMPONENTS, AND DOES NOT WORK FOR FUNCTION COMPONENTS
// so the difference between props and states is, state works internally from class and props are passed from fuctions

// REACT HOOKS : FROM REACT 16.08, USING REACT HOOKS WE CAN USE STATE ON FUNCTION COMPONENTS ALSO.

// NOTE: IF STATE CHANGES, IT WILL LEAD REACT TO RE-RENDER OR RELOADING OUR DOM TO UPDATE