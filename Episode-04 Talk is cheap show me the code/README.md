# What i learned from Episode-04 Talk is cheap show me some code ? 🚀

# planning
- What are you going to build 
- Draw how your app look like 
- Create a wireframe 
- What all componenets my app have (Low Level)
  - Header
    - Logo
    - Nav Items
  - Body
    - Search
    - Card Container
      - Card
        - Name
        - Rating 
        - Cuisine 
        - Delivery Time
  - Footer
    - Copyright
    - Links
    - Address




# JSX Features

-- Allows Css in js

const CardStyle = {
  backgroundColor: "#f0f0f0",
};
<div className="card" style={CardStyle}>

or 
// First curly bracket is allow to write js into html and second one is an object 
<div className="card" style={{  backgroundColor: "#f0f0f0" }}>

# pros

- Pros are just an argument to the function
- Take all the argements and pass it as props
- Destructuring props on the fly
  const Card = ({name,cuisine}) =>

# Config driven UI

# Keys for componenet 
Avoid rerendring all the same level elements 
Never use index as key its bad  

# JSON Viewer is chrome plugin to see json 
 

