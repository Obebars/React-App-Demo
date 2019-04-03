import React, { Component } from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxilliary';
import AuthContext from '../Context/auth-context';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  };

    state={
      persons:[
        {id:'rh1', name:'Omar Bebars', age:29},
        {id:'erghert6', name:'Aya Salem', age:28},
        {id:'herhteh0', name:'Maher Bebars', age:65}
      ],
      otherState:'Some other value',
      showPersons:false,
      showCockpit: true,
      changeCounter:0,
      authentication: false
    };

    static getDerivedStateFromProps(props, state){
      console.log('[App.js] getDerivedStateFromProps', props);
      return state;
    };

    componentDidMount(){
      console.log('[App.js] componentDidMount')
    };

    shouldComponentUpdate(nextProps, nextState){
      console.log('[App.js] shouldComponentUpdate');
      return true
    };

    componentDidUpdate(){
      console.log('[App.js] componentDidUpdate');
    };


    nameAddedHandler=(event,id)=>{
      const findPerson = this.state.persons.findIndex(person=>{
        return person.id === id
      });

      const person= {
        ...this.state.persons[findPerson]
      };
      person.name=event.target.value;

      const persons =[...this.state.persons];
      persons[findPerson]= person;

      this.setState((prevState, props) =>{
        return{
          persons: persons,
          changeCounter: prevState.changeCounter + 1
        };

        });
    };

    loginHandler = ()=>{
      this.setState({authentication: true});
    };

    toggleDivHandler=()=>{
      const showDiv = this.state.showPersons;
      this.setState({showPersons: !showDiv});
    };


    deletePersonHandler = (personIndex) =>{
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons: persons});
    };

    render () {
      console.log('[App.js] render');
      let divDisplay= null;

      if (this.state.showPersons){
        divDisplay=(
               <Persons
                      persons={this.state.persons}
                      clicked={this.deletePersonHandler}
                      added={this.nameAddedHandler}
                       />);
          };

      return (

        <Aux>
          <button
            onClick={() => this.setState({showCockpit: false})}>
            Hide Cockpit
          </button>
            <AuthContext.Provider value = {{
              authentication: this.state.authentication,
              login: this.loginHandler}}>

                {this.state.showCockpit ? (
                  <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.toggleDivHandler}
                  />
                ) : null}

                {divDisplay}
            </AuthContext.Provider>
        </Aux>
    )

  }
}
export default withClass(App,Classes.App);
