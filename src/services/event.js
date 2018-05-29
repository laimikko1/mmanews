import axios from 'axios'

const baseUrl = 'https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v1/us/events'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default {
    getAll
}