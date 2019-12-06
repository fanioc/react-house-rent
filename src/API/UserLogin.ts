/**
 * API接口:用户登入/员工登入/检查登入状态
 *
 */
import Axios from "axios";
import { ReturnData, getToken } from "./return";

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
    let result = await Axios.get<ReturnData<UserInfo>>("/api/checktoken", {
      params: {
        name: name,
        token: token
      }
    });
    return result.data.data;
  } catch (e) {
    // TODO::增加测试数据
    return { name: "管理员", right: 7, token: token };
    // return false;
  }
}

export async function APILogin(
  name: string,
  passowrd: string,
  type: number
): Promise<UserInfo | false> {
  try {
    let result = await Axios.get<ReturnData<UserInfo>>("/api/login", {
      params: {
        name: name,
        passowrd: passowrd,
        type: type
      }
    });
    return result.data.data;
  } catch (e) {
    //TODO::增加测试数据
    return false;
  }
}

export async function APILoginOut(): Promise<UserInfo | false> {
  try {
    let usertoken = getToken();
    if (usertoken === false) return false;
    let result = await Axios.get<ReturnData<UserInfo>>("/api/loginout", {
      params: {
        ...usertoken
      }
    });
    return result.data.data;
  } catch (e) {
    //TODO::增加测试数据
    return false;
  }
}
