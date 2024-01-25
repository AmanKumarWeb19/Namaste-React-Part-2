import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location, contact } = this.props;
    const { count, count2  } = this.state;
    return (
      <div className="user-card">
        <h1>CountClass:- {count}</h1>
        <h1>CountClass2:- {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}
export default UserClass;
