import axios from 'axios'

const baseUrl = 'https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v1/us/fighters'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}
``
const getAllTitleHolders = async () => {
    const response = await axios.get(`${baseUrl}/title_holders`)
    let x = []

    //Splice and push to get the women champs in the correct ordering.
    // Better to do here than explode the component, lol UGLY code allll around
    x.push(response.data[10])
    response.data.splice(10, 1)
    x.push(response.data[1])
    response.data.splice(1, 1)
    x.push(response.data[9])
    response.data.splice(9, 1)
    x.push(response.data[0])
    response.data.splice(0, 1)
    return response.data.concat(x)
}
export default {
    getAll,
    getAllTitleHolders
}