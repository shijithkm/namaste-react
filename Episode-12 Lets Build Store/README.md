# What i learned from Episode-12 Build Store ?

# Redux

- Redux is sperate library and its not mandatory to use
- https://www.npmjs.com/package/zustand - Gaining popularity
- https://redux.js.org/
- https://redux-toolkit.js.org/ Standard way of write redux

- Its a big data object can be aceisble to all the componenets
- Data stored a slices eg. user slice, cart slice ..etc
- You cannot directly update the store, need to follow below steps

- Add to Cart => dispatch(action) => function (reducer) => modify the cart
- When you click on Add button it disapatchs as an action which calls the reducer function which update the slices of the reduct store
- Selector will help to update the data in Cart/React Componenet - (Subscribing Store)
-

- Install @reduxjs/toolkit and react-redux
  - npm i @reduxjs/toolkit
  - npm i react-redux
- Build our store
- Connect our store
- Slice (cartSlice)
- dispatch
- selector

# always subscribe the required data from the store

- const items = useSelector((store) => store.cart.items);
- How to print state ?
- import { current } from "@reduxjs/toolkit";
- console.log(current(state))
