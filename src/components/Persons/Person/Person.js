import React, {Component} from 'react';
import classes from './Person.css'
// import Radium from 'radium';

class Person extends Component{

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
      }
    
      componentWillMount(){
        console.log('[Person.js] Inside componentWillMound()');
      }
    
      componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
      }
    

render() {
    console.log('[Person.js] Inside render()');
    return <div className={classes.Person}  >
        <p onClick={this.props.click}>  I'm  {this.props.name} and my age is {this.props.age} years! </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />

    </div> 
    
}
}

// const person = (props) => {

// //     let style = {
// //         '@media (min-width: 500px )':{
// //             width: '450px'
// //         }    
// //     }

//     return <div className={classes.Person}  >
//         <p onClick={props.click}>  I'm  {props.name} and my age is {props.age} years! </p>
//         <p>{props.children}</p>
//         <input type="text" onChange={props.changed} value={props.name} />

//     </div> 
    
    
// };

export default Person;