import React from 'react';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

    <div className="App-Main">
    <h1> Main</h1>
    </div>



      <footer className="App-Footer">
      <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
