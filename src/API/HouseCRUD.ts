/*
 * @Author: Fanioc
 * @Date: 2019-12-03 18:50:29
 * @Description: 获取所有房源/获取已审核房源/发布房源
 */

import Axios from "axios";
import { ReturnData, API } from "./APIconfig";

//基础信息
export interface HouseBaseInfo {
  presell_number: string; //预售证号
  build_name: string; //楼盘名
  build_id: string; //栋号
  img_url?: string; //图片地址
  enterprise?: string; //开发企业
  house_type: string; //户型
  hotline: string; //热线电话
  introudce: string; //简介
}

export interface HouseInfo extends HouseBaseInfo {
  intent_stime?: string; //意向登记时间开始
  intent_endtime?: string; //意向登记时间结束
  audit_status?: number; //审核状态
  choose_stime?: string; //选楼开始日期
  choose_endtime?: string; //选择结束日期
  reception_stime?: string; //现场接受资料时间开始
  reception_endtime?: string; //现场接受资料时间结束
  reception_site?: string; //现场接受资料地点
  lottery_date?: string; //摇号日期
}

export interface HouseList extends Array<HouseInfo> {}

export async function APIHouseIssue(
  info: HouseInfo,
  name: string,
  token: string
): Promise<HouseInfo | false> {
  try {
    let response = await Axios.post<ReturnData<HouseInfo>>(
      API.HouseIssue,
      { ...info },
      {
        params: {
          name: name,
          token: token
        }
      }
    );
    let result = response.data.data;
    if (response.data.err_code === 0) return result;
    else return false;
  } catch (e) {
    return false;
  }
}

export async function APIHouseList(): Promise<HouseList | false> {
  try {
    let result = await Axios.get<ReturnData<HouseList>>(API.HouseList);
    return result.data.data;
  } catch (e) {
    return false;
  }
}

//修改
export async function APIHouseModify(
  info: HouseInfo,
  name: string,
  token: string
): Promise<HouseInfo | false> {
  try {
    let result = await Axios.post<ReturnData<HouseInfo>>(
      API.HouseModify,
      info,
      {
        params: {
          name: name,
          token: token
        }
      }
    );
    return result.data.data;
  } catch (e) {
    return false;
  }
}
