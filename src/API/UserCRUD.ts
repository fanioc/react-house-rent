/*
 * @Author: Fanioc
 * @Date: 2019-12-03 20:09:57
 * @Description: 购房用户接口
 */
import Axios from "axios";
import { ReturnData, API } from "./APIconfig";

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

export async function UserRegister(info: UserInfo): Promise<UserInfo | false> {
  try {
    let result = await Axios.post<ReturnData<UserInfo>>(API.UserRegister, info);

    if (result.data.err_code === 0) {
      return result.data.data;
    } else return false;
  } catch (e) {
    //TODO::添加全局toast "网络错误"
    return false;
  }
}

export default {};
