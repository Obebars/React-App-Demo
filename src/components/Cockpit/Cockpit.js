import React, { useEffect , useRef , useContext } from 'react';
import Classes from './Cockpit.css';
import AuthContext from '../../Context/auth-context';


const Cockpit = (props)=>{

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect (() =>{
    console.log('[Cockpit.js] useEffect');
    /*setTimeout (() =>{
        alert('saved Data to cloud!')
    },2000);*/
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect (() =>{
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  let assignedClasses=[];

  let bttnClass='';

  if (props.showPersons){
    bttnClass= Classes.Red
  };

  if(props.personsLength <= 2){
    assignedClasses.push(Classes.red); //classes=['red']
  }

  if(props.personsLength <= 1){
    assignedClasses.push(Classes.bold); //classes=['bold']
  }
  return(
    <div className={Classes.Cockpit}>
    <p className={assignedClasses.join(' ')}> {props.title} </p>

    <button
    ref={toggleBtnRef}
    className={bttnClass}
    onClick={props.clicked}> Toggle Persons </button>
      {<button onClick={authContext.login}> Log in </button> }
    </div>

  )
};
export default React.memo(Cockpit);
