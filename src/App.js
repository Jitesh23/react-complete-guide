import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Jitesh", age: 24},
      {name: "Nandini", age: 23},
      {name: "Diksha", age: 22}
    ],
    showPersons: false
  }

switchHandlerName = (newName) => {
  // console.log('Was Clicked');

  this.setState({
    persons: [
      {name: newName, age: 24},
      {name: "Nandini", age: 23},
      {name: "Diksha", age: 24}
    ]
  })
}

nameChangeHandler = (event) =>{
  this.setState({
    persons:[
      {name: 'Jitesh', age: 24},
      {name: event.target.value, age: 23},
      {name: "Diksha", age: 24}
    ]
  })
}

togglePersonsHandler = () => {

  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    let person = null;

    if (this.state.showPersons){

    person = (
      <div>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        />
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age} 
      click={this.switchHandlerName.bind(this, 'Jitu')}
      changed={this.nameChangeHandler}
      > My Hoobies are: sleeping </Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}
      />

     </div>
    );
    }


    return (
      <div className="App">
        <h1>I am react App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Name</button>
      
        {person}
      </div>
    );

    // return React.createElement('div', {className : 'App'}, React.createElement('h1', 'null', 'I\'m react app'));
  }
}

export default App;
