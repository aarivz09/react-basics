
import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => {
    return <Person
        name={person.name}
        delete={() => props.clicked(index)}
        changeName={(event) => props.changed(event, person.id)}
        age={person.age}
        key={person.id}


    />


});


export default persons;

