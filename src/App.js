import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
//import Radium, {StyleRoot} from 'radium';

class App extends Component {

  state = {
    persons: [
      {id: 'ab', name: "Jitesh", age: 24},
      {id: 'abc', name: "Nandini", age: 23},
      {id: 'abcd', name: "Diksha", age: 22}
    ],
    showPersons: false
  }


nameChangeHandler = (event, id) =>{

  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id; 
  });

  const person = 
  {
    ...this.state.persons[personIndex]

  }

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  //Alternative to above methond
  //const person = Object.assign({}, this.state.persons[personIndex]);

  this.setState({
    persons: persons
  })
}

togglePersonsHandler = () => {

  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}

deletePersonHandler = (personIndex) => {

  //This will also mutate the main array that is handling by React so this is not correc
  //way to do this
 // const persons = this.state.persons;
 
 //Another approach is 

 //const persons = this.state.persons.slice();
 
 //With new es6 Syntax 

 const persons = [...this.state.persons];
 persons.splice(personIndex, 1);
  this.setState({persons:persons})
}

  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }

    // };

    let person = null;
    let btnClass = '';

    if (this.state.showPersons){

    person = (
      <div>
        {
          this.state.persons.map((person, index)=> {
            return <Person
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangeHandler(event, person.id)}
            />
          })
        }
      
     </div>
    );

    btnClass = classes.Red;

    // style.backgroundColor = 'red';

    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }

    }
    

    let assignedClasses = [];

    if (this.state.persons.length <=2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <h1>I am react App</h1>
        <p className={assignedClasses.join(' ')}>This is awesome</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Name</button>
      
        {person}
      </div>
      // </StyleRoot>
    );

    // return React.createElement('div', {className : 'App'}, React.createElement('h1', 'null', 'I\'m react app'));
  }
}

export default App;
