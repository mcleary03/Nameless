import React, { Component } from 'react';
import Btn from './components/Btn'
import Container from './components/Container'
import Col from './components/Col'
import Input from './components/Input'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container border gap='10px' template="'right right left' '. main main'">
          <Col gap='10px' area='main'>
            <Btn caps>click</Btn>
            <Btn color='yellow' bold caps>click me!</Btn>
            <Btn color='red' caps>click me!</Btn>
          </Col>
          <Col gap='10px' area='left'>
            <Btn color='green' bold caps>click me!  please click me, I want to be clicked...</Btn>
          </Col>
          <Col gap='10px' area='right'>
            <Btn color='glass' style={{width: '100px', height: '70px'}}> click me! </Btn>
            <Input/>
          </Col>
        </Container>
        <Container border gap='10px'>
          <Col gap='10px'>
            <Btn caps>click</Btn>
            <Btn color='yellow' bold caps>click me!</Btn>
            <Btn color='red' caps>click me!</Btn>
          </Col>
          <Col gap='10px'>
            <Btn color='green' bold caps>click me!  please click me, I want to be clicked...</Btn>
          </Col>
          <Col gap='10px'>
            <Btn color='glass' style={{width: '100px', height: '70px'}}> click me! </Btn>
            <Input/>
          </Col>
        </Container>
      </div>
    )
  }
}

export default App;
