import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import Btn from '../components/Btn'

const alertEvent = e => alert(e.type)

storiesOf('Btn', module)
  .add( 'Default Btn', () => <Btn>click me!</Btn> )
  .add('Hovered Btn', () => <Btn hover> click me! </Btn>)
  .add('Clicked Btn', () => <Btn hover click> click me! </Btn>)
  .add('Glass Btn', () => <Btn color='glass' style={{width: '400px', height: '200px'}}> click me! </Btn>)
  .add('All color schemes', () => (
    <div> 
      <Btn color='glass'>glass</Btn>
      <Btn>default</Btn>
      <Btn color='lightblue'>lightblue</Btn>
      <Btn color='blue'> blue </Btn>
      <Btn color='green'>green</Btn>
      <Btn color='yellow'>yellow</Btn>
      <Btn color='orange'>orange</Btn> 
      <Btn color='red'>red</Btn>
    </div>
  ))

storiesOf('Modified Btn', module)
  .add( 'Btn with event', () => <Btn onClick={alertEvent} color='orange'>click me!</Btn> )
  
  .add( 'Btn with caps prop', () => <Btn color='orange' caps>click me!</Btn> )
  
  .add( 'Btn custom style', () => (
    <Btn 
      style={{
        height: '400px',
        width: '400px',
        fontFamily: 'impact',
        fontSize: '4em',
        textShadow: '0 1px 1px black',
        transform: 'rotate(45deg)',
        margin: '100px',
      }} 
      color='orange'
      caps
    >
      <span style={{display: 'inline-block', transform: 'rotate(-45deg)'}}>click me!</span>
    </Btn> 
  ))
  
  .add( 'Btn custom color scheme', () => (
    <Btn color={{
      background: 'magenta',
      border: 'aqua',
      shadow: 'blue',
      inset: 'darkblue',
      text: 'gold'
    }}>click me!</Btn>
  ))