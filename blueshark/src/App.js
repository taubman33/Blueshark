import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import Contact from './components/Contact'
import About from './components/About'

import Algebra from './components/topics/Algebra'
import Geometry from './components/topics/Geometry'
import Quadratics from './components/topics/Quadratics'
import Trig from './components/topics/Trig'


const routes = [
 {
   path: "/Contact",
   component: Contact
 },
 {
  path: "/About",
  component: About
},
 {
  path: "/Algebra",
  component: Algebra
},
{
  path: "/Trig",
  component: Trig
},
{
  path: "/Quadratics",
  component: Quadratics
},
{
  path: "/Geometry",
  component: Geometry
}
];

 class App extends Component {
   render () {
  return (
  
    <Router >


 <div className="grid">


      <header className="App-Header">
        <Header />
      </header>


      <div className="App-Sidebar">
        <Nav />
      </div>


      <div className="App-Main">
        <Main />
      </div>
      

    </div>

</Router>


  );
 }
 }

 export default App
