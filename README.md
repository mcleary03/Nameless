# Nameless
This is an experimental work in progress.  Much more Documentation coming.

## Purpose
An attempt to build a framework combining React.js with CSS Grid to make flexible responsive layouts for web apps.

## Example
\**All props are optional*

##### Three column layout:
```html
<Container gap='10px'>
  <Col gap='10px'>
    <h1>Col 1</h1>
    <Btn caps>click</Btn>
    <Btn color='yellow' bold caps>click me!</Btn>
    <Btn color='red' caps>click me!</Btn>
  </Col>
  <Col gap='10px'>
    <h1>Col 2</h1>
    <Btn color='green' bold caps>click me!</Btn>
  </Col>
  <Col gap='10px'>
    <h1>Col 3</h1>
    <Btn color='glass'>click me!</Btn>
    <Input/>
  </Col>
</Container>
```
## Components
### Container
Divides content horizontally like a row in a grid.

The `Col` component further divides this area into columns

### Col
Divide content into columns that, by default, are evenly distributed and responsive.
**\* must be inside a `<Container>` for grid layout to function properly**

#### Props
**gap**

Defines amount of space between grid columns (any measurement units)

### Btn
Animated theme based button
#### Props
**color** *sets the theme of the button*
* **string** *('glass', 'white', 'black', 'red', 'orange', 'yellow', 'green', 'blue', 'lightblue')*
* **object** *(style object overrides any defaults)*
##### **bold**
##### **caps**