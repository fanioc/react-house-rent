/*
 * @Author: Fanioc
 * @Date: 2019-12-06 20:07:33
 * @Description: API URL配置文件
 */

export const API_BASE = "http://localhost:8080/";

export const API = {
  HouseList: API_BASE + "house/getlist",
  Login: API_BASE + "login",
  CheckToken: API_BASE + "checktoken",
  HouseIssue: API_BASE + "house/issue"
};
