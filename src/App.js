import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './Login.js';
import Inicio from './Inicio.js';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      permiso : ' ',
    };
    this.acceder = this.acceder.bind(this);
  }
  acceder(event){
    this.setState({permiso : true});
  }
  render(){
     return <Inicio/>;
  }
}

export default App;
