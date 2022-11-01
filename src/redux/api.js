import instance from "../service/interceptor";
import axios from "axios";


const appConfig = {
    appUrl: "http://127.0.0.1:8000",
};

export const signIn = async (payload) => {
    console.log(":::", payload);
    return await axios.post(`${appConfig.appUrl}/auth_login/login/`, payload);
};

export const isLoginApi = async () => {
    return await instance.get('/auth_login/is_login/');
}

export const tableApi = async () => {
    return await instance.get('/api/tabledata');
}

export const categoryApi = async () => {
    return await instance.get('/api/categorydata/');
}

export const itemsApi = async () => {
    return await instance.get('/api/itemdata/');
}

export const orderApiget=async () => {
    return await instance.get(`/api/orderdata/`);
};

export const orderApi = async (table_id) => {
    return await instance.get(`/api/orderdata/${table_id}`);
}

export const orderApidelete = async (order_id) => {
    return await instance.delete(`/api/orderdata/${order_id}/`)
}

export const orderApiPost = async (payload) => {
    return await instance.post("/api/orderdata/", payload);
};

export const orderApiUpdate = async (order_id, payload) => {
    return await instance.put(`/api/orderdata/${order_id}/`, payload);
};

export const orderfilterapi = async (payload)=>{
    return await instance.post('/api/orderfilter/',payload);
}
