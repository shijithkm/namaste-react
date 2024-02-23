# What i learned from Episode-06 EXploring the world ? 🚀

# Monolith Architecture 
- Everything was written together in one big project => API, UI, DB connection, SMS ..etc 
- Hard to make change which required to build the complete application 

# Microservices 
- API, UI , Auth are considered as different project 
- It follow single responsibility principle 
- Team can indipendently work and different deployment cycle/pipeline 
- Flexibility to choose differenct lang for diff project 

# When to make an api call 
- App loads make an api call and render into ui (Loads=>API=>Render)
- Loads => Render => API => Rerender 
    => This is the better approach 
    => This gives better UX
    
# useEffect     
- Its takes two arguments callback funtion and dependency array 
- useEffect(()=>{},[])
- Callback funtion called after your componenets render 

# CORS Policy 
- Browser block from one origin to other origin 
- How to bypass ? using https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf

# Optional Chaining 
  json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

# Spinner or Shimmer UI ?
https://codepen.io/andru255/pen/wvBdxbb