import React from "react";
import { APICheckToken } from "../API/UserLogin";
export interface UserInfoType {
  name?: string;
  id?: number;
  head_img?: string;
  token?: string;
  right?: number; // 1浏览、2修改、4审核 7管理员  0用户
  handle: Function;
}

export const userInfo: UserInfoType = { handle: setUser };

function setUser(info: UserInfoType) {
  // 手动深拷贝...
  userInfo.token = info.token;
  userInfo.name = info.name;
  userInfo.right = info.right;
  userInfo.head_img = info.head_img;
  userInfo.id = info.id;
}

export const ContextUser = React.createContext<UserInfoType>({
  handle: setUser
});

/**
 * User Session Manager
 */

// check session with load app.
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
      userInfo.handle(result);
      return true;
    }
  });
}
