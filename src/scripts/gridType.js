export default props => {
  if (props.template) {
    return {
      gridTemplateAreas: props.template
    }
  } else {
    return {
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gridTemplateRows: 'repeat(auto-fit, minmax(200px, 1fr))',
    }
  }
}