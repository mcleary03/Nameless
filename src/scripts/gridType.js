export default props => {
  const { template, area } = props
  const style = {}

  // if template is string just use it
  // if template is an array:
    // check if array of components or strings
      // **if components, send them down as children to render in proper order
      // if strings, join to string and use template
    // any other data types, reject the template
  // if (Array.isArray(template)) template = template.map(el=>)


  // assuming template is valid, use it
  if (template) style.gridTemplateAreas = template
  if (area) style.gridArea = area
  if (!(template || area)) {
    style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))'
    style.gridTemplateRows = 'repeat(auto-fit, 1fr))'
  }

  return style
}