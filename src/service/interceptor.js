import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import LocalStorageService from './services/storage/localstorageservice'



// LocalStorageService
const GetAccessToken = () => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
        return access_token
    }
    else {
        localStorage.clear();
        // navigate("/login");
    }
}

const GetRefreshToken = () => {
    const refresh_token = localStorage.getItem('refresh_token');
    if (refresh_token) {
        return refresh_token
    }
    else {
        localStorage.clear();
        // navigate("/login");
    }
}

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json",
    },
});



// Add a request interceptor
instance.interceptors.request.use(
    config => {
        const token = GetAccessToken()
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        // config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        return response
    },
    function (error) {
        const originalRequest = error.config
        console.log(error);
        //   if (
        //     error.response.status === 401 &&
        //     originalRequest.url === 'http://127.0.0.1:3000/v1/auth/token'
        //   ) {
        //     router.push('/login')
        //     return Promise.reject(error)
        //   }
        if (error.response) {
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true
                const refreshToken = GetRefreshToken()
                return instance
                    .post('http://127.0.0.1:8000/auth_login/refresh_token/', {
                        refresh: refreshToken
                    })
                    .then(res => {
                        if (res.status === 200) {
                            localStorage.setItem("access_token", res.data.access)
                            instance.defaults.headers.common['Authorization'] =
                                'Bearer ' + GetAccessToken()
                            return instance(originalRequest)
                        }
                    },error=>{
                        if (error){
                            window.location.href = "http://localhost:3000";
                        }
                    })
            }
        }
        return Promise.reject(error)
    }
)

export default instance;


// export const tableApi = () => {
//     return instance.get(`/api/tabledata`);
// }