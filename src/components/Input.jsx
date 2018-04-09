import React, { Component } from 'react'
import colors from '../styles/colors'

export default class Input extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      error: this.props.error || false,
      success: this.props.success || false,
      warning: this.props.warning || false,
      focus: this.props.focus || false
    }

    //background, border, shadow, inset, text
    const { white, red, green, orange } = colors
    // optional props
    const { style } = props
    // any of these defaults can be overridden by passing an inline style object as a prop
    this.defaultStyle = {
      boxSizing: 'border-box',
      lineHeight: '1.8',
      fontSize: '1.2em',
      width: '100%',
      borderRadius: '0.5em',
      border:`1px solid ${white.border}`,
      backgroundColor: '#ffffff',
      // filter: focus ? `drop-shadow(0 1px 3px ${green.shadow})` : 'none',
      margin: '0',
      padding: '0 8px',
      ...style // override defaults with inline style object
    }

    this.focusStyle = {
      ...this.defaultStyle,
      filter: `drop-shadow(0 1px 3px ${green.shadow})`,
      background: 'blue'
    }
    this.errorStyle = {
      ...this.defaultStyle,
      border:`1px solid ${red.border}`,
      backgroundColor: red.background,
    }

    this.successStyle = {
      ...this.defaultStyle,
      border:`1px solid ${green.border}`,
      backgroundColor: green.background,
    }

    this.warningStyle = {
      ...this.defaultStyle,
      border:`1px solid ${orange.border}`,
      backgroundColor: orange.background,
    }
  } // end constructor
  
  handleError = e => {
    console.log('error')
    this.setState( () => { error: true })
  }
  
  handleSuccess = e => {
    console.log('success')
    this.setState( () => { success: true })
  }
  
  handleWarning = e => {
    console.log('warning')
    this.setState( () => { warning: true })
  }
  
  handleFocus = e => {
    console.log('focused')
    this.setState( () => { focus: true })
  }
  
  handleBlur = e => {
    console.log('blurred')
    this.setState( () => ({ focus: false }))
  }
  
  componentDidMount() {
    // this.style = this.getStyle()
  }

  getStyle = () => {
    const { error, success, warning, focus } = this.state
    const { errorStyle, successStyle, warningStyle, focusStyle, defaultStyle } = this

    return error ?
      errorStyle :
        success ?
          successStyle :
          warning ?
            warningStyle :
            focus ?
              focusStyle :
              defaultStyle
  }
  
  render() {
    const { 
      state: { error, success, warning, focus },
      props: { children },
      handleError,
      handleSuccess,
      handleWarning,
      handleFocus,
      handleBlur,
      getStyle
    } = this

    return (
      <input 
        style={ getStyle() }
        onFocus={ handleFocus }
        onBlur={ handleBlur }
        // onError={ handleError }
        // onSuccess={ handleSuccess }
        // onWarning={ handleWarning }
      >
        { children }
      </input>
    )
  }
} 
