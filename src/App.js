import React, { Component } from 'react';
import Btn from './components/Btn'
import Container from './components/Container'
import Col from './components/Col'
import Input from './components/Input'

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: '#000'}}>
        <Container gap='10px'>
          <Col gap='10px'>
            <h1>Col 1</h1>
            <Btn caps>click</Btn>
            <Btn color='yellow' bold caps>click me!</Btn>
            <Btn color='red' caps>click me!</Btn>
          </Col>
          <Col gap='10px'>
            <h1>Col 2</h1>
            <Btn color='green' bold caps>click me!  please click me, I want to be clicked...</Btn>
          </Col>
          <Col gap='10px'>
            <h1>Col 3</h1>
            <Btn color='glass'> click me! </Btn>
            <Input/>
          </Col>
        </Container>

        <Container 
          gap='10px' 
          template="'col3 col3 col2' '. col1 col1'">
          <Col gap='10px' area='col1'>
            <h1>Col 1</h1>
            <Btn caps>click</Btn>
            <Btn color='yellow' bold caps>click me!</Btn>
            <Btn color='red' caps>click me!</Btn>
          </Col>
          <Col gap='10px' area='col2'>
            <h1>Col 2</h1>
            <Btn color='green' bold caps>click me!  please click me, I want to be clicked...</Btn>
          </Col>
          <Col gap='10px' area='col3'>
            <h1>Col 3</h1>
            <Btn color='glass'> click me! </Btn>
            <Input/>
          </Col>
        </Container>
      </div>
    )
  }
}

export default App;
