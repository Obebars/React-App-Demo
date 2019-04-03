import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import Classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../Context/auth-context';

class Person extends Component {

  constructor(props){
    super(props);
    this.inputElementRef= React.createRef();
    /*this is any reference object React gives me, whatever
    that is behind the scenes*/
  };

  static contextType = AuthContext;

  componentDidMount(){
    //this.inputElementRef.focus()
    this.inputElementRef.current.focus();
    console.log(this.context.authentication)
  };
  render(){
    console.log('[Person.js] rendering...')

    return(
      <Aux>
          {this.context.authentication ? <p> Authenticated! </p> :
             <p> Please log in </p>}
          <p onClick={this.props.clicked}>
          My name is {this.props.name}, I'm {this.props.age} years old!
          {this.props.children}</p>
        <input
          type='text'
          //ref={(inputEl) => {this.inputElementRef = inputEl}}
          //this.inputElementRef holds the inputEl we're getting as an argument
          ref={this.inputElementRef}
          onChange={this.props.added}
          value={this.props.name}/>
      </Aux>
    );

  }

};
Person.propTypes ={
  clicked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  added: PropTypes.func
};

export default withClass(Person, Classes.Person);
