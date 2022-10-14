import instance from "../service/interceptor";

export const tableApi = async () => {
    return await instance.get('/api/tabledata');
}

export const categoryApi = async () => {
    return await instance.get('/api/categorydata/');
}

export const itemsApi =async () =>{
    return await instance.get('/api/itemdata/');
}

export const orderApi =async (table_id)=>{
    return await instance.get(`/api/orderdata/${table_id}`);
}

export const orderApidelete=async (order_id)=>{
    return await instance.delete(`/api/orderdata/${order_id}/`)
}

export const orderApiPost=async (payload)=>{
    return await instance.post("/api/orderdata/",payload);
};

export const orderApiUpdate=async (order_id,payload)=>{
    return await instance.put(`/api/orderdata/${order_id}/`,payload);
};

