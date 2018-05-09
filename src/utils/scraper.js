import cheerio from 'cheerio'
import axios from 'axios'

const getMatchups = async (eventId) => {
    let eventFights = []


    const baseUrl = 'http://ufc-data-api.ufc.com/api/v1/us/events'
    const response = await axios.get(`${baseUrl}/${eventId}`);
    const $ = cheerio.load(response.data)


    $('.flipcard-front').each((i, elem) => {
        let fighterOne = $(elem).find('.fighter-name-red').text()
        let fighterTwo = $(elem).find('.fighter-name-blue').text()

        let fighterOneImage = $(elem).find('.fc-portrait-red').attr("src")
        let fighterTwoImage = $(elem).find('.fc-portrait-blue').attr("src")

        let fighterOneRecord = $(elem).find('.fight-card-match-up tr:nth-child(1) td:nth-child(1)').text()
        let fighterTwoRecord = $(elem).find('.fight-card-match-up tr:nth-child(1) td:nth-child(3)').text()
        let weightClass = $(elem).find('.fight-card-match-up tr:nth-child(3) td:nth-child(1)').text()

        const eventFight = {
            fighterOne: fighterOne,
            fighterTwo: fighterTwo,
            fighterOneImage: fighterOneImage,
            fighterTwoImage: fighterTwoImage,
            fighterOneRecord: fighterOneRecord,
            fighterTwoRecord: fighterTwoRecord, 
            weightClass: weightClass  
        }

        eventFights.push(eventFight)

    })
    console.log(eventFights)
}

export default {
    getMatchups
}


