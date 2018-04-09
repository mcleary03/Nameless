import React, { Component } from 'react'
import colors from '../styles/colors'
import debounce from '../scripts/debounce'

export default class Btn extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      hasHeight: false,
      hover: props.hover || false,
      focus: props.focus || false,
      click: props.click || false
    }

    // pull out color variables from                   an inline style custom color scheme object  -OR-  chosen scheme  -OR-  default scheme
    const { background, border, shadow, inset, text } = typeof props.color==='object' ? props.color : colors[props.color || 'white']

    // optional props
    const { style, bold, caps } = props

    this.btnContainerStyle = {
      position: 'relative',
      boxSizing: 'border-box',
      margin: '0 0 5px 0',
    }

    // any of these defaults can be overridden by passing an inline style object as a prop
    this.defaultStyle = {
      boxSizing: 'border-box',
      touchAction: 'manipulation',
      userSelect: 'none',
      position: 'relative',
      top: '0',
      left: '0',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      margin: '0',
      padding: '8px',
      borderBottom: `5px solid ${border}`,
      borderRadius: '15px',
      backgroundColor: `${background}`,
      color: text,
      boxShadow: `inset 0 0 5px ${inset}`,
      filter: `drop-shadow(0 7px 3px ${shadow})`,
      lineHeight: '1.8',
      fontSize: '1.2em',
      fontFamily: 'Arial',
      fontWeight: bold ? 'bold' : 'normal',
      textShadow: bold ? '0 1px 1px rgba(30,30,30,0.5)' : 'none',
      textTransform: caps ? 'uppercase' : 'none', // `caps` is an optional boolean prop
      transition: '0.3s',
      ...style // override defaults with inline style object
    }

    this.hoverStyle = {
      ...this.defaultStyle,
      borderBottom: `3px solid ${border}`,
      filter: `drop-shadow(0 5px 2px ${shadow})`,
      top: '2px',
    }

    this.clickStyle = {
      ...this.hoverStyle,
      borderBottom: `0 ${border}`,
      filter: `drop-shadow(0 0 0 ${shadow})`,
      boxShadow: `1px 2px 2px ${shadow} inset`,
      top: '5px',
    }

  } // end constructor

  handlemouseenter = e => {
    this.setState( (state, props) => ({ hover: true }))
  }

  handlemouseleave = e => {
    this.setState( () => ({ click: false, hover: false }))
  }

  handlefocus = e => {
    this.setState( () => ({ focus: true }))
  }

  handleblur = e => {
    this.setState( () => ({ focus: false }))
  }

  handlemousedown = e => {
    this.setState( () => ({ click: true }))
  }

  handlemouseup = e => {
    this.setState( () => ({ click: false }))
    if (this.props.onclick) this.props.onclick(e)
  }

  handlekeydown = e => {
    if (this.isClick(e)) this.handlemousedown(e)
  }

  handlekeyup = e => {
    if (this.isClick(e)) this.handlemouseup(e)
  }

  // return true if button is focused and space or enter key is pressed
  isClick = e => this.state.focus && (e.keyCode === 32 || e.keyCode === 13)

  handleEvent = e => {
    this[`handle${e.type}`](e) // handle animations
    if (this.props[`on${e.type}`]) this.props[`on${e.type}`](e) // handle actions
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.setState( (state, props) => ({ hasHeight: true }))
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = debounce( () => {
    this.setState(this.state)
  }, 50);

  getContentHeight = () => {
    // after first render, we change the span height to match the contents
    return this.state.hasHeight ? this.content.clientHeight : 'auto'
  }
  
  render() {
    const { 
      state: { hover, focus, click },
      props: { children },
      btnContainerStyle,
      defaultStyle,
      hoverStyle,
      clickStyle,
      handleEvent,
      getContentHeight
    } = this

    const style = (hover || focus) ? (click ? clickStyle : hoverStyle) : defaultStyle

    return (
      <div style={{ ...btnContainerStyle, height: getContentHeight() }}>
        <button
          ref={ el => this.content = el }
          style={ style }
          onMouseEnter={ handleEvent }
          onMouseLeave={ handleEvent }
          onFocus={ handleEvent }
          onBlur={ handleEvent }
          onMouseDown={ handleEvent }
          onMouseUp={ handleEvent }
          onKeyDown={ handleEvent }
          onKeyUp={ handleEvent }
        >
          { children }
        </button>
      </div>
    )
  }
} 
