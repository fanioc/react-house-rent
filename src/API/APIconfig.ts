/*
 * @Author: Fanioc
 * @Date: 2019-12-06 20:07:33
 * @Description: API URL配置文件
 */
export const API_BASE = "http://localhost:8080";

export const API = {
  HouseList: API_BASE + "/house/list",
  HouseIssue: API_BASE + "/house/issue",
  HouseModify: API_BASE + "/house/modify",

  StaffRegister: API_BASE + "/staff/register",
  StaffModify: API_BASE + "/staff/modify",
  StaffDel: API_BASE + "/staff/delete",
  StaffList: API_BASE + "/staff/list",

  UserRegister: API_BASE + "/user/register",
  UserModify: API_BASE + "/user/modify",
  UserDel: API_BASE + "/user/delete",
  UserList: API_BASE + "/user/list",

  Login: API_BASE + "/login",
  CheckToken: API_BASE + "/checktoken",
  LoginOut: API_BASE + "/loginout"
};

export interface ReturnData<T> {
  data: T;
  err_code: number;
  msg: string;
}
