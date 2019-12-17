/*
 * @Author: Fanioc
 * @Date: 2019-12-03 20:09:57
 * @Description: 购房用户接口
 */
import Axios from "axios";
import { ReturnData, API } from "./APIconfig";
import qs from "qs";
export interface UserInfo {
  id: number;
  name: string;
  head_img: string;
  sex: string;
  phone: string;
  password: string;
  right: number;
  register_time: string;
  status: number;
  house_type: string;
  purpose_house: string;
  identity_type: string;
  identity_num: string;
  check_status: number;
}

export async function APIUserRegister(
  info: UserInfo
): Promise<UserInfo | false> {
  try {
    let result = await Axios.post<ReturnData<UserInfo>>(
      API.UserRegister,
      qs.stringify(info)
    );

    if (result.data.err_code === 0) {
      console.log(result.data.data);
      return result.data.data;
    } else return false;
  } catch (e) {
    return false;
  }
}

export async function GetUserInfo(
  name: string,
  token: string
): Promise<UserInfo | false> {
  try {
    let result = await Axios.get<ReturnData<UserInfo>>(API.UserInfo, {
      params: {
        name: name,
        token: token
      }
    });

    if (result.data.err_code === 0) {
      return result.data.data;
    } else return false;
  } catch (e) {
    return false;
  }
}

export async function APIGetUserList(
  name: string,
  token: string
): Promise<Array<UserInfo> | false> {
  try {
    let result = await Axios.get<ReturnData<Array<UserInfo>>>(API.UserList, {
      params: {
        name: name,
        token: token
      }
    });

    if (result.data.err_code === 0) {
      return result.data.data;
    } else return false;
  } catch (e) {
    return false;
  }
}

export default {};
