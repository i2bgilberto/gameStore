import axios from "axios";
import { FecthResponse } from "../hooks/useData";

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
        axiosInstance.defaults.params = {
            ...axiosInstance.defaults.params,
            ...{
                page_size: 100
            }
        }
    }

    getAll = () => {
        return axiosInstance.get<FecthResponse<T>>(this.endpoint,
            {
               params: {
                   ...axiosInstance.defaults.params
               }
            }
        ).then(res => res.data)  ;
    }
}

export default ApiClient;