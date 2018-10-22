import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
//import Radium, {StyleRoot} from 'radium';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        {id: 'ab', name: "Jitesh", age: 24},
        {id: 'abc', name: "Nandini", age: 23},
        {id: 'abcd', name: "Diksha", age: 22}
      ],
      showPersons: false
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMound()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Update App.js] Inside shouldComponenetUpdate()', nextProps, nextState);
    return true;
}

componentWillUpdate(nextProps, nextState){
    console.log('[Update App.js] Inside componentWillUpdate()', nextProps,nextState);
}

componentDidUpdate(){
    console.log('[Update App.js] Inside componentDidUpdate()');
}

  // state = {
  //   persons: [
  //     {id: 'ab', name: "Jitesh", age: 24},
  //     {id: 'abc', name: "Nandini", age: 23},
  //     {id: 'abcd', name: "Diksha", age: 22}
  //   ],
  //   showPersons: false
  // }


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
    console.log('[App.js] Inside render()')
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
    

    if (this.state.showPersons){

    person = (
      <div>
        <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
        />
     </div>
    );

    

    // style.backgroundColor = 'red';

    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }

    }
    

    

    return (
      // <StyleRoot>
      <div className={classes.App}>
      <Cockpit
      showPersons = {this.state.showPersons}
      persons = {this.state.persons}
      clicked={this.togglePersonsHandler}
      />
        {person}
      </div>
      // </StyleRoot>
    );

    // return React.createElement('div', {className : 'App'}, React.createElement('h1', 'null', 'I\'m react app'));
  }
}

export default App;
