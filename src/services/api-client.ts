import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9da543d741dd462c865cddf1af274792"
    }
})