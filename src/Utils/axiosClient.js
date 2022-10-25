import axios from "axios";
import { BASE_URL } from "./AppConstant";

//axios instance
export const HTTP_CLIENT = axios.create({
  baseURL: BASE_URL,
});

HTTP_CLIENT.interceptors.response.use(
  (response) => {
    const user = response.data.data
    
    // Menu Structure
    const menu = user.menuStructure;
    localStorage.setItem("menu", JSON.stringify(menu));

    //Setting other details
    localStorage.setItem("name", user.name);
    localStorage.setItem("email", user.email);
    localStorage.setItem("dateOfBirth", user.dateOfBirth);
    localStorage.setItem("nickName", user.nickName);
    localStorage.setItem("phone", user.phone);
    localStorage.setItem("status", user.status);
    localStorage.setItem("userName", user.userName);

    // const resp = JSON.parse(localStorage.getItem("menu"));
    // console.log(resp[0].menuStructureId);

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// HTTP_CLIENT.interceptors.request.use(
//   (config) => {
//     const authToken = localStorage.getItem("accessToken");
//     if (authToken) {
//       config.headers.Authorization = `Bearer ${authToken}`;
//     }
//     return config;
//   },
//   (err) => {
//     Promise.reject(err);
//   }
// );

export default HTTP_CLIENT;
