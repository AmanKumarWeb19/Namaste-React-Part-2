import { createContext } from "react";

const UserContext = createContext({
  loggedInUSer: "Default User",
});

export default UserContext;
