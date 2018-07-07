import React, { Component } from 'react'
import gridType from '../scripts/gridType'

export default class Col extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }

    // optional props
    const { style, gap, area } = props
    // any of these defaults can be overridden by passing an inline style object as a prop
    this.defaultStyle = {
      boxSizing: 'border-box',
      padding: '2% 10%',
      display: 'grid',
      gridRowGap: gap || 'none',
      justifyItems: 'center',
      alignItems: 'start',
      ...gridType(props),
      ...style // override defaults with inline style object
    }
  } // end constructor

  componentDidMount() {
    
  }
  
  render() {
    const { 
      props: { children },
      defaultStyle,
    } = this

    const style = defaultStyle

    return (
      <section style={ style }>
        { children }
      </section>
    )
  }
} 
