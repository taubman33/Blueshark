import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Nav from './components/Nav.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Home from './components/Home'

import Algebra from './components/topics/Algebra.jsx'
import Geometry from './components/topics/Geometry.jsx'
import Logic from './components/topics/Logic.jsx'
import Quadratics from './components/topics/Quadratics.jsx'
import Ratios from './components/topics/Ratios.jsx'
import Stats from './components/topics/Stats.jsx'
import Trig from './components/topics/Trig.jsx'



const routes = [
  { path: "/",
  component: Home
  }, 

 { path: "/Contact",
   component: Contact
 },
 { path: "/About",
  component: About
},
 { path: "/Algebra",
  component: Algebra
},
{ path: "/Trig",
  component: Trig
},
{ path: "/Quadratics",
  component: Quadratics
},
{ path: "/Geometry",
  component: Geometry
},
{ path: "/Ratios",
  component: Ratios
},
{ path: "/Logic", 
  component: Logic 
},
{ path: "/Stats",
  component: Stats 
}
];

 class App extends Component {
   render () {
  return (
  
  <Router >
<div className ="App">
        <header className="App-Header">
            <Header />
          </header>

    <div className="grid">

          <div className="App-Sidebar">
            <Nav />
          </div>


          <div className="App-Main">
            <Main />
          
       
          </div>
        
     </div>
    </div>
</Router>


  );
 }
 }

 export default App
