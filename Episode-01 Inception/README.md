
#What i learned from Episode-01 Inception ?

    1. How to generate predefined html code in vscode ?
        Emmet in vs code generate pre defined code for you
        Eg html:5
    2. How to create a hello world program using html,css and javascript
        document.createElement - This is used to create h1 tag
        innerHTML used to assign value into h1 tag
        document.getelementById('root') used to get root element
        appendChild is used to append h1 into root element 
    3. How to create a hello world program with react CDN
        Go to react cdn https://legacy.reactjs.org/docs/cdn-links.html
        Get the CDN links of react and reactDOM and add in your html body section 
        Create root using reactDOM.createRoot
        
        const root = ReactDOM.createRoot(document.getElementById('root'))
        This returns react object 
          
        Create Element using React.createElement which accept 3 parameters 
        Tag Name
        Attributes as object 
        Children or Value 
        Eg. const heading = React.createElement('h1', {id:"heading"}, 'Hello World!');
        This returns react object 
          
    4. How to create nested element using  React.createElement  

        Third parameter of the React.createElement we can pass as Array of children 
        const parent = React.createElement('div', { id: "parent", key:"parent" }, [
            React.createElement('div', { id: "child1" ,key:"child1" },
                [React.createElement('h1', {key:"c1h1"}, "I am an h1 tag"), React.createElement('h2', {key:"c1h2"}, "I am an h2 tag")]),
            React.createElement('div', { id: "child2", key:"child2" },
                [React.createElement('h1', {key:"c2h1"}, "I am an h1 tag"), React.createElement('h2', {key:"c2h2"}, "I am an h2 tag")])]
        )
        
        Above code is not user friendly right, JSX simplifies this for you         
