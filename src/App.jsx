import React, { useEffect } from 'react';
import './App.css';
import Pie from './components/Pie';
import PieState from './context/pies/PieState.js'
import SearchUser from './components/SearchUser'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';


function App() {

  useEffect(() => {
    M.AutoInit();
  },[])

  return (
    <div className="App">
      <h5 className='center'>Explore Languages Used By Devs On Github</h5>
      <br/>
      <PieState>
        <SearchUser />
        <Pie />
      </PieState>
      <br/>
    </div>
  );
}

export default App;
