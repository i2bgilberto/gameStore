import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "f9ddeca6841143c3900d57b095e5f434"
    }
})