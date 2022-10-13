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

export const orderApi =async (order_id)=>{
    return await instance.get(`/api/orderdata/${order_id}`);
}