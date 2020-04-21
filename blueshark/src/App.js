import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Nav from './components/Nav'


function App() {
  return (



    <div className="grid">
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
</div>



  );
}

export default App;
