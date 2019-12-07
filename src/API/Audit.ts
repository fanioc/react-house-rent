/*
 * @Author: Fanioc
 * @Date: 2019-12-03 19:25:46
 * @Description:
 */
/**
 * API接口:审核记录类
 * //TODO::审核操作
 */
//@ts-nocheck
import Axios from "axios";
import { ReturnData,API } from "./APIconfig";

interface HousePublishForm {
  name: string;
  housetype: string;
}

export async function APIAuditHouse(
  name: string,
  token: string
): Promise<HousePublishForm | false> {
  try {
    let response = await Axios.get("/api/audithouse", {
      params: {
        name: name,
        token: token
      }
    });
    let result: ReturnData<HousePublishForm>;
    return false;
  } catch (e) {
    return false;
  }
}
