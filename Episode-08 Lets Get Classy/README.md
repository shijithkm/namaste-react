# What i learned from Episode-08 ?

# Class based componenet

- Class extend from React.Componenet
- Use render method to return JSX
- Constructor is required to receive in class alsong with super()
- super() in class components are correctly linked to their parent class
- Use this to access the props eg. this.props.name
- this.state used to create state variable it should be inside constructor

# NEVER DIRECTLY UPDATE YOUR STATE VARIABLE

- Use this .setState instead in class based componenets

# Life Cycle Order

- Parent Constructor
- Parent Render

  - Child 1 Constructor
  - Child 1 Render
  - Child 2 Constructor
  - Child 2 Render

  - Diff Algorithm run here and batch

  - Child 1 componentDidMount
  - Child 2 componentDidMount

- Parent componentDidMount => USed to make an api call

- This called when state variable update

- Child 1 Render Called
- Child 2 Render Called
- Child 1 componenetDidUpdate
- Child 2 componenetDidUpdate

-- Unmonting cycle

-- Child 1 componenetWillUnmount
-- Child 2 componenetWillUnmount

- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
