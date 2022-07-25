import React from 'react';
import './App.css';
import { Amount } from '../Components/amount/Amount'
import { Error } from '../Components/error/Error'

function App() {
  return (
    <div className="App">
      <Error />
      <Amount />
    </div>
  );
}

export default App;
