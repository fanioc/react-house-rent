/*
 * @Author: Fanioc
 * @Date: 2019-12-07 21:52:03
 * @Description: 员工接口
 */
import Axios from "axios";
import { ReturnData, API } from "./APIconfig";

export interface StaffInfo {
  id: number;
  name: string;
  head_img: string;
  sex: string;
  phone: string;
  password: string;
  right: number;
  status: number;
  join_time: string;
}

export async function APIGetStaffList(
  name: string,
  token: string
): Promise<Array<StaffInfo> | false> {
  try {
    let result = await Axios.get<ReturnData<Array<StaffInfo>>>(API.StaffList, {
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
