# What i learned from Episode-03 Laying the foundation ? 🚀

# How to create a script using package.json?

install npx using cmd => npm install npx
Add below code unser scritps object in pacakage.json
"start": "parcel index.html", => Used for dev build
"build": "parcel build index.html", => Used for prod build
npm run start or npm start => used to run the dev build

# JSX

Its not part of react
Its helps to developer life easy
Its HTML like syntax
Parcel will convert JSX into javascript so browser can understand
JSX (Transpiled) ==> PARCEL ==> Babel => React.CreateElement
Attributes has slight differance than html in jsx
class=>className
tabindex=>tabIndex
onclick=>onClick
onmouseover=>onMouseOver

multiple lines hsould wrapped into round bracket
const headingJSX = (

  <div>
    <h1>Hello World JSX!</h1>
  </div>
);

# vs code extention

Prettier - Code formatter
Bracket Pair Colorization Toggler
ESLint
Better Comments

#React Component

Class based components (old)
Functional based componenets (new)

- It just a normal js function wrapp it under arrow/normal function
- Name it with capital letter to understand react
- Return JSX Code or react element

const headingComponenet = () => {
return <h1>Hello World Functional Componenet</h1>
};
root.render(<HeadingComponenet/>);
or

const headingComponenet = () => <h1>Hello World Functional Componenet</h1>

or

We can use normal function

const headingComponenet = function () {
return <h1>Hello World Functional Componenet</h1>;
};

- You don't need to write return if its one line
- What is componenet composition => Componenet inside a componenet

{} this curly bracket allow us to write any js code with in html
// React Title Componenet
const TitleComponenet = () => {
  const title = "Title Componenet";
  return <h1>{title}</h1>;
};

- Its allow to mix with componenet and element 
const element = <h1>I am an element</h1>

// React Heading Componenet
const HeadingComponenet = () => {
  return (
    <div id="container">
      <TitleComponenet />
      <TitleComponenet>{TitleComponenet()}</TitleComponenet>
      {element}
      <h1>Heading Componenet</h1>;
    </div>
  );
};

- JSX blocks cross site scripting attack 