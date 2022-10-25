import { HTTP_CLIENT } from "../Utils/axiosClient";

const LoginService = async (params) => {
  const data =  await HTTP_CLIENT.post("/api/v1/user/Authenticate", params, {
      headers: { 
        "x-api-version": "1"
       },
    });

  console.log(data);
  return data;


};

export {LoginService};
