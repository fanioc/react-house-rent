/**
 * API接口:审核记录类
 * //TODO::审核操作
 */
//@ts-nocheck
import Axios, { AxiosResponse } from "axios";
import { ReturnData } from "./return";

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
