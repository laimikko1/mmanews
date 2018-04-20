import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: 'http://ufc-data-api.ufc.com/api/v1/us/news'
})
const baseUrl = 'http://ufc-data-api.ufc.com/api/v1/us/news'


const getAll = async () => {
    const response = await axiosInstance.get(baseUrl);
    return response.data
}

const getHeadlines = async () => {
    const response = await axiosInstance.get(baseUrl);
    let data = response.data.filter(object =>
        !(!object.thumbnail))
    return data.slice(0, 15);
}

export default {
    getAll,
    getHeadlines
}