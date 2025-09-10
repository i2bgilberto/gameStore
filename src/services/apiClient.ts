import axios, { AxiosRequestConfig } from "axios";



  export interface FecthResponse <T>{
    count: number;
    next?: string | null;
    previous?: string | null;
    pageSize?: number;
    results: T[];
}


const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "f9ddeca6841143c3900d57b095e5f434"
    }
})

class ApiClient<T>{
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config : AxiosRequestConfig) => {
        return axiosInstance.get<FecthResponse<T>>(this.endpoint, config).then(res => res.data);
    }
}

export default ApiClient;