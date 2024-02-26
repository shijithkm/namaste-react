import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "",
        locationm: "",
      },
    };
    console.log(this.props.name + " Constructor Called");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child componentDidMount called");
    const data = await fetch("https://api.github.com/users/shijithkm");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log(this.props.name + " componentDidUpdate");
  }

  componentWillUnmount() {
    // Triger when componenet remove from DOM (unmounting)
    console.log(this.props.name + " componentWillUnmount");
  }

  render() {
    console.log(this.props.name + " Render Called");

    const { name, location, email, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: {email}</h2>
        <img src={avatar_url}></img>
      </div>
    );
  }
}

export default UserClass;
