import axios from "axios";
import instance from "./interceptor"

const appConfig = {
    appUrl: "http://127.0.0.1:8000",
};

export const signIn = (payload) => {
    return axios.post(`${appConfig.appUrl}/auth_login/login/`, payload);
};

// export const tableApi = () => {
//     return instance.get('/api/tabledata');
// }

// export const categoryApi=()=>{
//     return instance.get("/api/categorydata/");
// }

// export const itemApi =()=>{
//     return instance.get("/api/itemdata/");
// }

// export const orderApi =(pk)=>{
//     return instance.get(`/api/orderdata/${pk}`);
// }

// export const orderApiPost=(payload)=>{
//     return instance.post("/api/orderdata/",payload);
// };
