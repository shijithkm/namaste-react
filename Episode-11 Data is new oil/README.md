# What i learned from Episode-11 ?

# Higher order component

- It take a componenet and return a componenet

# React Developer Tools

- Helps to debug
- https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

# Controlled componenets

- Parent is controlling children

# How child can modify parent state vaiable ?

- https://react.dev/learn/sharing-state-between-components

# Props Drilling

- Passing props to its children
- https://react.dev/learn/passing-data-deeply-with-context
- React context avoid props drilling issue
- https://react.dev/reference/react/createContext
- Eg . Logged in user info, dark mode theme
- Create user context using createContext and use it using useContext hook
- in class based componenet "Consumer" is the key word used in react to consume
  <UserContext.Consumer>
  {(data) => {
  console.log(data);
  return data.loggedInUser;
  }}
  </UserContext.Consumer>
  - Using Provider we can change value in user context
  - <UserContext.Provider value={{ loggedInUser: "Shijith" }}>
