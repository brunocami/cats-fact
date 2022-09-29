import React from 'react'
import './App.css';
import Cats from './coponents/Cats';
import Header from './coponents/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="container">
        <Cats />
      </div>
    </div>
  );
}

export default App;
