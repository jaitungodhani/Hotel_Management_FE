import instance from "../service/interceptor";

export const tableApi = async () => {
    return await instance.get('/api/tabledata');
}

export const categoryApi = async () => {
    return await instance.get('/api/categorydata/');
}

