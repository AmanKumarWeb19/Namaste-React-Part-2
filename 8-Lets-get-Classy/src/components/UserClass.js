import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("child Consturcture");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AmanKumarWeb19");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);

    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component will Unmount");
  }
  render() {
    console.log("child render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1 style={{ textDecoration: "underline" }}>
          This is a Class Based Component
        </h1>

        <img src={avatar_url} alt="imaage" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
export default UserClass;
