import instance from "../service/interceptor";

export const tableApi = async () => {
    return await instance.get('/api/tabledata');
}