import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {

  /*static getDerivedStateFromProps(pros,state){
    console.log('[Persons.js],getDerivedStateFromProps ');
    return state;
  }*/

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate ');
    if(nextProps.persons !== this.props.persons){
      return true;
    }else{
      return false;
    }
  };/*Here we compare only the pointers as they both point to the same place
  in the heap memory, so here we basicaly state that if something in that
  Persons component changed and the pointer is still the same then this
  update wouldn't run*/


  getSnapshotBeforeUpdate(prevProps, PrevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate ');
    return {message: 'snapshot!'}
  };
  componentDidUpdate(prevProps, PrevState, snapshot){
    console.log('[Persons.js] componentDidUpdate ');
    console.log(snapshot);
  };

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount')
  }

  render(){
    console.log('[Persons.js] rendering...')

    return this.props.persons.map((person,index) =>{

        return <Person
                isAuthenticated={this.props.authenticated}
                clicked={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                added={(event) =>this.props.added(event, person.id)}
                 />
              } );
  }
};



export default Persons;
