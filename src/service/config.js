import axios from "axios";
import instance from "./interceptor"

const appConfig = {
    appUrl: "http://127.0.0.1:8000",
};

export const signIn = (payload) => {
    return axios.post(`${appConfig.appUrl}/auth_login/login/`, payload);
};

export const tableApi = () => {
    return instance.get(`/api/tabledata`);
}