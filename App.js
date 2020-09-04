import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main'
import Guests from './Guests'
import State from './State'



function App() {
  return (
    <State>
      <div className="App">
        <Header />
        <Main />
        <Guests />
      </div>
    </State>
  );
}

export default App;
