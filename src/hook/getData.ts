import { useEffect, useState } from 'react';
import req from '../utils/requests';

const useData = (endpoint:string, query: object, deps: any[] = []) => {
    const [data, setData] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getData = async()=> {
            setIsLoading(true);
            try {
                const result = await req(endpoint, query)
                console.log(result)
                setData(result);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, deps);

    return {
        data,
        isLoading,
        isError
    }
}

export default useData;