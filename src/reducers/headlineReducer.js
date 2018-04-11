import newsService from '../services/news'

const headlineReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_HEADLINES':
            return action.data
        default:
            return state
    }
}


export const initializeHeadlines = () => {
    return async (dispatch) => {
        const headlines = await newsService.getHeadlines()
        console.log(headlines);
        dispatch({
            type: 'INIT_HEADLINES',
            data: headlines
        })
    }
}

export default headlineReducer