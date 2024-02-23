# What i learned from Episode-05 Lets get hooked ? 🚀

# Export

- default export  ==> we can write only one default export in a file eg. export default resurents
- named export ==> In a single file if you want to export multiple export eg. export const CDN_URL
               ==> While import use curly brackets {}  eg. import { CDN_URL } from "../utils/constants";

# Hooks 

- Make sure you are creating hooks inside the component function 
- useState()  => This create state variable and it maintain the state of your local componenet 
              => When ever state variable changes react rerender the component  
              => const [restaurants, setRestaurants] = useState(allRestaurants); its nothing but array destructuring 
- useEffect() =>

# Algorithm 

- Reconciliation Algorithm => React Fiber (https://legacy.reactjs.org/docs/reconciliation.html)
- It Creates Virtual Dom => Representation of actual dom (object)
- Diff Algorithm  => Find the diff between old vs new virtual DOM and update the actual DOM
- After react 16 algorithms called React Fiber
- Comparison between actual DOM is expensive but object comparison is faster so it becomes faster 
- https://github.com/acdlite/react-fiber-architecture - read more 
- React can do efficient DOM manipulation by using diff algo
