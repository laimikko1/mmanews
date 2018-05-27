import axios from 'axios'

const baseUrl = 'http://ufc-data-api.ufc.com/api/v1/us/fighters'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}
``
const getAllTitleHolders = async () => {
    const response = await axios.get(`${baseUrl}/title_holders`)
    return response.data
}
export default {
    getAll,
    getAllTitleHolders
}