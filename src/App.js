import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Manish from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Manish></Manish>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <Manish>gkhjkhj</Manish>
        <Manish></Manish>
        <Manish></Manish>
        <Manish></Manish>
        <Manish></Manish>
        <Manish></Manish>
        <Manish></Manish>
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
