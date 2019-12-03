import React from "react";
import { APICheckToken, UserInfo } from "../API/UserLogin";

export interface UserContext extends UserInfo {
  set: (info: UserInfo) => void;
}

export const UserState: UserContext = { set: setUser };

function setUser(info: UserInfo) {
  // 手动深拷贝...
  UserState.token = info.token;
  UserState.name = info.name;
  UserState.right = info.right;
  UserState.head_img = info.head_img;
  UserState.id = info.id;
}

export const ContextUser = React.createContext<UserContext>(UserState);

/**
 * User Session Manager
 */

// check token with load app.
export function LoadCheck(): Promise<boolean> | false {
  const token = sessionStorage.getItem("UserToken");
  const name = sessionStorage.getItem("UserName");
  if (token != null && name != null) {
    return CheckToken(name, token);
  } else return false;
}

// check session valid.
export function CheckToken(name: string, token: string): Promise<boolean> {
  //TODO::调用检查token接口,检查登入状态
  return APICheckToken(name, token).then(result => {
    if (result === false) {
      return false;
    } else {
      UserState.set(result);
      console.log(UserState);
      return true;
    }
  });
}
