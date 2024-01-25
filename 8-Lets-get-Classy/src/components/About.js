import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h3>This is Namaste React Series</h3>

      <User name={"Aman Kumar (Function)"} />
      <UserClass
        name={"Aman Kumar (Class)"}
        location={"Patna Class"}
        contact={"6202378596"}
      />
    </div>
  );
};
export default About;
