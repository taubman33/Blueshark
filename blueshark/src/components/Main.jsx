import React from 'react'
import {  Route } from 'react-router-dom'

import Algebra from './topics/Algebra'
import Geometry from './topics/Geometry'
import Quadratics from './topics/Quadratics'
import Trig from './topics/Trig'
import Stats from './topics/Stats'
import Ratios from './topics/Ratios'
import Contact from './Contact'
import About from './About'
import Home from './Home'


export default function Main () {

return (

  <div className="Main-container">
      
    <div className = "Main">

          <Route exact path="/" component={Home} />
          <Route exact path="/Algebra"component={Algebra}/>
          <Route exact path="/Geometry"component={Geometry}/>
          <Route exact path="/Quadratics"component={Quadratics}/>
          <Route exact path="/Trig"component={Trig}/>
          <Route exact path="/Stats" component={Stats} />
          <Route exact path="/Ratios" component={Ratios} />
          <Route exact path="/Contact"component={Contact}/>
          <Route exact path="/About"component={About}/>

   </div>
  
  </div>
 )
}