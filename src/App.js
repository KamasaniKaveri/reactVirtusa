
import React, {Component} from 'react';
import './App.css';
 import Login from'./components/Login';
 import Signup from './components/Signup';
 import Home from './components/Home';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
           <Route exact path="/Home" element={<Home/>}/>
           <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/" element={<Signup/>}/> 
        </Routes>
      </Router>
    )
  }
}

export default App;