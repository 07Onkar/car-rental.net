import axios from 'axios';

const api = axios.create({
    baseURL:"https://localhost:5174/api"
});

export default api;