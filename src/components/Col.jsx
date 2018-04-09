import React, { Component } from 'react'

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
      // gridTemplateRows: 'repeat(auto-fit, 1fr)',
      // gridArea: area || 'none',
      gridRowGap: gap || 'none',
      justifyItems: 'center',
      alignItems: 'start',
      ...this.colType(props),
      ...style // override defaults with inline style object
    }
  } // end constructor

  colType = props => {
    if (props.area) {
      return {
        gridArea: props.area
      }
    } else {
      return {
        gridTemplateRows: 'repeat(auto-fit, 1fr)',
      }
    }
  }

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
