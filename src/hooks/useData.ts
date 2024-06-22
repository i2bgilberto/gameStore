import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



interface FecthResponse <T>{
    count: number;
    results: T[];
}

const useData = <T>(endPoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FecthResponse<T>>(endPoint, { signal: controller.signal })
        .then((res) => {
            setData(res.data.results);
            setLoading(false);
        }).catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });

        return () => {
            controller.abort();
        }
    }, [endPoint])


    return { data, error, isLoading };
}


export default useData;