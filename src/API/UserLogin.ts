/*
 * @Author: Fanioc
 * @Date: 2019-12-02 00:19:46
 * @Description: 用户登入/员工登入/检查登入状态/退出登入
 */

import Axios from "axios";
import { ReturnData, API } from "./APIconfig";
import { SetToken } from "../context/ContextUser";

export interface UserInfo {
  name?: string;
  id?: number;
  head_img?: string;
  token?: string;
  right?: number; // 1浏览、2修改、4审核 7管理员  0用户
}

export async function APICheckToken(
  name: string,
  token: string
): Promise<UserInfo | false> {
  try {
    let result = await Axios.get<ReturnData<UserInfo>>(API.CheckToken, {
      params: {
        name: name,
        token: token
      }
    });

    return result.data.data;
  } catch (e) {
    return { name: "管理员", right: 7, token: token };
  }
}

export async function APILogin(
  name: string,
  passowrd: string,
  type: number
): Promise<UserInfo | false> {
  try {
    let result = await Axios.get<ReturnData<UserInfo>>(API.Login, {
      params: {
        name: name,
        passowrd: passowrd,
        type: type
      }
    });
    if (
      result.data.data.name !== undefined &&
      result.data.data.token !== undefined
    )
      SetToken(result.data.data.name, result.data.data.token);
    //TODO判断errcode
    return result.data.data;
  } catch (e) {
    //TODO::添加全局toast
    SetToken(name, "测试token");
    return { name: "管理员", right: 7, token: "测试token" };
    //TODO::增加测试数据
  }
}

export async function APILoginOut(
  name: string,
  token: string
): Promise<Boolean> {
  try {
    let result = await Axios.get<ReturnData<null>>(API.LoginOut, {
      params: {
        name: name,
        token: token
      }
    });
    if (result.data.err_code == 0) return true;
    else return false;
  } catch (e) {
    //TODO::添加全局toast
    return false;
  }
}
