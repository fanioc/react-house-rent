import React from "react";
import { APICheckToken, UserInfo } from "../API/UserLogin";

export interface UserContext extends UserInfo {
  set: (info: UserInfo) => void;
}

export const UserState: UserContext = { set: () => {} };

export const ContextUser = React.createContext<UserContext>(UserState);

/**
 * User Session Manager
 */

// check token with load app.
export function LoadCheck(): Promise<boolean> | false {
  let tokeninfo = GetToken();
  if (tokeninfo !== false) {
    return CheckToken(tokeninfo.name, tokeninfo.token);
  } else return false;
}

// check session valid.
export function CheckToken(name: string, token: string): Promise<boolean> {
  //TODO::调用检查token接口,检查登入状态
  return APICheckToken(name, token).then(result => {
    if (result === false) {
      console.log("APICHECKTOKEN,REMOVE TOKEN");
      RemoveToken();
      return false;
    } else {
      UserState.set(result);
      return true;
    }
  });
}

//从localstorage里获取token
export function GetToken(): { token: string; name: string } | false {
  let token = localStorage.getItem("UserToken");
  let name = localStorage.getItem("UserName");
  if (token === null || name === null) return false;
  else {
    return {
      token: token,
      name: name
    };
  }
}

//在localstorage设置token
export function RemoveToken() {
  localStorage.removeItem("UserToken");
  localStorage.removeItem("UserName");
}

//在localstorage设置token
export function SetToken(name: string, token: string) {
  localStorage.setItem("UserToken", token);
  localStorage.setItem("UserName", name);
}
