import axios from 'axios';

export const key = '20754911-b25f46be7bf2aed6d430ebe86'

const api = axios.create({
    baseURL: 'https://pixabay.com/api/'
})


// const searchAPI = (input) => {
//     return axios.get('https://pixabay.com/api/',{
//         params: {
//             key: '20754911-b25f46be7bf2aed6d430ebe86',
//             q: input,
//             lang: 'pt'
//         }
//     })
// }
export default api