import newsService from '../services/news'


const newsReducer = (state = [], action) => {
    console.log(`ACTION`, action)

    switch (action.type) {
        case 'INIT_NEWS':
            return action.data
        default:
            return state;

    }
}

export const initializeNews = () => {
    return async (dispatch) => {
        const news = await newsService.getAll()
        dispatch({
            type: 'INIT_NEWS',
            data: news
        })
    }
}



export default newsReducer