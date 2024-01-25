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
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1 style={{ textDecoration: "underline" }}>
          This is a Class Based Component
        </h1>
        <h1>CountClass:- {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1, //Here count is the state variable..
            });
          }}
        >
          Increace Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
export default UserClass;
