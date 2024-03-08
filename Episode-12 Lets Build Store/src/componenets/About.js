import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor Called");
  }

  componentDidMount() {
    console.log("Parent componentDidMount called");
  }

  render() {
    console.log("Parent Render Called");
    return (
      <div>
        <h1>About Us</h1>
        <h1>This is namaste react about us page</h1>
        <div>
          logged in User :
          <UserContext.Consumer>
            {(data) => {
              console.log(data);
              return data.loggedInUser;
            }}
          </UserContext.Consumer>
        </div>
        {/* <User name="Shijith" /> */}
        <UserClass name="Child 1" />
        <UserClass name="Child 2" />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h1>This is namaste react about us page</h1>
//       <User name="Shijith" />
//       <UserClass name="Shijith" />
//     </div>
//   );
// };

export default About;
