import React, { Component } from 'react'
import { BrowserRouter as Route, Router, Switch, Link } from 'react-router-dom'

import Algebra from './topics/Algebra'
import Geometry from './topics/Geometry'
import Quadratics from './topics/Quadratics'
import Trig from './topics/Trig'

import Contact from './Contact'
import About from './About'


export default function Main () {

return (

    <div className="Main-container">
      
    <div className = "Main">

   

    <Route exact path="/Algebra"component={Algebra}/>
    <Route exact path="/Geometry"component={Geometry}/>
    <Route exact path="/Quadratics"component={Quadratics}/>
    <Route exact path="/Trig"component={Trig}/>
    <Route exact path="/Contact"component={Contact}/>
    <Route exact path="/About"component={About}/>




  </div>
  
  </div>
 )
}