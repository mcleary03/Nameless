import React, { Component } from 'react';
import Btn from './components/Btn'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Btn perspective caps>click me!</Btn>
        <Btn color={'yellow'} bold perspective caps>click me!</Btn>
        <Btn color={'red'} bold caps>click me!</Btn>
        <Btn color={'green'} bold perspective caps>click me!  please click me, I want to be clicked...</Btn>
      </div>
    );
  }
}

export default App;
