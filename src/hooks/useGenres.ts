import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}


const useGenres = () => {
    const [genres, setGenres] = useState<Genre[] | null>([]);
    const [ error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
            .then(res => setGenres(res.data.results))
            .catch(err => {
                if(err instanceof CanceledError)return;
                setError(err)
            });
        return () => controller.abort();
    },[]);
    
    return {genres, error, isLoading}
}

export default useGenres;