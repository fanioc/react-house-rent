import { UserState } from "../context/ContextUser";
export interface ReturnData<T> {
  data: T;
  err_code: number;
  msg: string;
}

export function getToken(): false | { token: string; name: string } {
  if (UserState.token === undefined || UserState.name === undefined)
    return false;
  else return { token: UserState.token, name: UserState.name };
}
