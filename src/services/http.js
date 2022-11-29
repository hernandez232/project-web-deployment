import axios from 'axios';

export const request = async ({ url, method, data, token }) => {
    const options = {};

    if (method === 'GET') {
        options.params = data;
    } else {
        options.data = data;
    }

    if (token) options.headers = {
        Authorization: `Bearer ${token}`
    }
    
    const res = await axios(`${import.meta.env.VITE_API_URL}/api${url}`, {
        ...options,
        method,
    });

    return { response: res.data, status: res.status };
}
