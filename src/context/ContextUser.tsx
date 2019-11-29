import React from "react";
interface UserContext {
  userName?: string;
  userToken?: string;
  userRight?: number;
}
var user: UserContext = {};

const ContextUser = React.createContext(user);

export default ContextUser;
