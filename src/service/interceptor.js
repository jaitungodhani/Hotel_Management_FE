import axios from 'axios';




// LocalStorageService
const GetAccessToken = () => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
        return access_token
    }
    else {
        localStorage.clear();
        window.location.href = "http://localhost:3000";
    }
}

const GetRefreshToken = () => {
    const refresh_token = localStorage.getItem('refresh_token');
    if (refresh_token) {
        return refresh_token
    }
    else {
        localStorage.clear();
        window.location.href = "http://localhost:3000";
    }
}

const instance = axios.create({
    baseURL: "http://127.0.0.1:5555",
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
                return axios.post('http://127.0.0.1:5555/auth_login/refresh_token/', {
                    refresh: refreshToken
                })
                    .then(res => {
                        console.log(":::::::::", res.status);
                        if (res.status === 200) {
                            localStorage.setItem("access_token", res.data.access)
                            window.location.reload();
                            instance.defaults.headers.common['Authorization'] =
                                'Bearer ' + GetAccessToken()
                            return instance(originalRequest)
                        }
                    }, (error) => {
                        localStorage.clear();
                        window.location.href = "http://localhost:3000";
                        console.log(".........", error);
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