import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Nav from './components/Nav'
import Contact from './components/Contact'


const routes = [
 {
   path: "/Contact",
   component: Contact
 }
]

function App() {
  return (
  

 <div className="grid">

<Router >
  <header className="App-Header">
    <Header />
  </header>

<div className="App-Sidebar">
  <Nav />
</div>


  <div className="Main">
    <Main />
  </div>


  
  <footer className="App-Footer">
  <Footer />
  </footer>

  </Router>
</div>



  );
}

export default App;
