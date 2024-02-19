
/**
 * Hello world program with javascript 
 */

// const heading = document.createElement('h1');
// heading.innerHTML = 'Hello World!';
// const root = document.getElementById('root');
// root.appendChild(heading);

/**
 * Hello world program with React 
 */

// Crate single element 
// const heading = React.createElement('h1', {id:"heading"}, 'Hello World!');

// Create Nested Element with React

/**
 *      <div id="parent">
 *          <div id="child1">
 *              <h1>I am an h1 tag</h1>
 *              <h1>I am an h2 tag</h1>
 *          </div>
 *         <div id="child2">
 *              <h1>I am an h1 tag</h1>
 *              <h1>I am an h2 tag</h1>
 *          </div>
 *      </div>
 */

const root = ReactDOM.createRoot(document.getElementById('root'))
console.log('root',root);
const parent = React.createElement('div', { id: "parent", key:"parent" }, [
    React.createElement('div', { id: "child1" ,key:"child1" },
        [React.createElement('h1', {key:"c1h1"}, "I am an h1 tag"), React.createElement('h2', {key:"c1h2"}, "I am an h2 tag")]),
    React.createElement('div', { id: "child2", key:"child2" },
        [React.createElement('h1', {key:"c2h1"}, "I am an h1 tag"), React.createElement('h2', {key:"c2h2"}, "I am an h2 tag")])]
)
console.log('parent',parent);
root.render(parent);

