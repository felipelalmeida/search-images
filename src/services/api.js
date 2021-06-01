import axios from 'axios';

export const key = '20754911-b25f46be7bf2aed6d430ebe86'

const api = axios.create({
    baseURL: 'https://pixabay.com/api/'
})

export default api