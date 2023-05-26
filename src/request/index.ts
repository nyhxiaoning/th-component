import axios from 'axios';
import store from 'store2';

// Axios
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use((config) => {
    if (store.has('token')) {
        config.headers.Authorization = 'Bearer ' + store.get('token');
    }

    return config;
});

export default axios;
