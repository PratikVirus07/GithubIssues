import React from 'react';
import logo from './logo.svg';
import './App.css';
import Issues from './Components/Issues'
import Form from './Components/Form'
import Heading from './Components/Heading';



function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Form></Form>
      {/* <Issues></Issues> */}
    </div>
  );
}

export default App;
