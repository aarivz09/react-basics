import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    let assignedclasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;

    }
    if (props.people.length <= 2) {
        assignedclasses.push(classes.red);
    }
    if (props.people.length <= 1) {
        assignedclasses.push(classes.bold); //classes = ['red','bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am a React Developer</h1>
            <p className={assignedclasses.join(' ')}>welcome to my website</p>
            {/* <button onClick={this.switchNameHandler.bind(this, 'Aariv')}>Switch Name</button> */}
            <button className={btnClass}
                onClick={props.clicked}>Switch Name</button>
        </div>
    );

};

export default cockpit;