import React from 'react';
// import { Input, Button } from 'antd';
import UserInput from './Components/UserInput';
import './App.css';

// const { TextArea } = Input;

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Instagram Engagement</h1>
        <h3>Username(s)</h3>
        <UserInput />
      </div>
      {/* <UserInput /> */}
    </div>
  );
}

export default App;
