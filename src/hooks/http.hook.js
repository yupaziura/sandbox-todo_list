import { useState } from "react";
// import { getData } from "../service/firebase";

export const useRequest = (action) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const request = async () => {
        setLoading(true);
        try{
            const data = await action();
            setLoading(false);
            return data;
        }
        catch(e) {
            setError(true);
            console.log(error);
        }
    }

    return {error, loading, setError, setLoading, request}
}