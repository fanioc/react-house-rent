import Axios, { AxiosResponse } from "axios";
import { UserInfoType } from "../context/ContextUser";

export async function APICheckToken(
  name: string,
  token: string
): Promise<UserInfoType | false> {
  try {
    let result: AxiosResponse<UserInfoType> = await Axios.get(
      "/api/checktoken",
      {
        params: {
          name: name,
          token: token
        }
      }
    );
    return result.data;
  } catch (e) {
    return false;
  }
}
