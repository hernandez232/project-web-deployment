import { useState, useEffect } from 'react'
import { request } from '../services/http';

export const useRequest = (url, method,
    data = null,
    auto = false,
    auth = false,
) => {
    const [response, setResponse] = useState();
    const [status, setStatus] = useState(auto ? 'loading' : 'done');

    async function makeRequest(info) {
        setStatus('loading');

        const res = !auth ? await request({ url, method, data: info }) : await request({ url, method, data: info, token: localStorage.getItem('auth')});

        setResponse(res);
        setStatus('done');
    }

    useEffect(() => {
        if (auto) {
            makeRequest(data);
        }
    }, []);

    return { data: response, isLoading: status === 'loading', fetchApi: makeRequest };
}
