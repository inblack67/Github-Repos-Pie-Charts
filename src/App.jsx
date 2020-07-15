import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pie from './components/Pie';
import PieState from './context/pies/PieState.js'


function App() {
  return (
    <div className="App">
      <PieState>
      <Pie />
      </PieState>
    </div>
  );
}

export default App;
