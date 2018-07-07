import React, { Component } from 'react'
import colors from '../styles/colors'
import gridType from '../scripts/gridType'

export default class Container extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }

    // pull out color variables        from         an inline style custom color scheme object  -OR-  chosen scheme  -OR-  default scheme
    const { background, border, shadow, inset } = typeof props.color==='object' ? props.color : colors[props.color || 'white']

    // optional props
    const { style, fill, gap, template } = props
    // any of these defaults can be overridden by passing an inline style object as a prop
    this.defaultStyle = {
      boxSizing: 'border-box',
      position: 'relative',
      top: 0,
      bottom: 0,
      padding: '12px',
      display: 'grid',
      gridColumnGap: gap || 'none',
      gridRowGap: gap || 'none',
      justifyItems: 'center',
      alignItems: 'start',
      justifyContent: 'space-around',
      borderBottom: props.border ? `1px solid ${border}` : 'none',
      backgroundColor: fill ? typeof fill==='string' ? fill : background : 'white',
      boxShadow: `inset 0 0 5px ${inset}`,
      filter: props.border ? `drop-shadow(0 3px 5px ${shadow})` : 'none',
      ...gridType(props),
      ...style // override defaults with inline style object
    }
  } // end constructor
  
  componentDidMount() {
    console.log(`${this.props.template}`)
  }
  
  render() {
    const { 
      props: { children },
      defaultStyle,
    } = this

    return (
      <div style={ defaultStyle }>
        { children }
      </div>
    )
  }
} 
