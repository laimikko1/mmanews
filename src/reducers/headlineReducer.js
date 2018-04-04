import newsService from '../services/news'

const headlineReducer = (state = [], action) => {
    console.log('ACTION', action)
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
        dispatch({
            type: 'INIT_HEADLINES',
            data: headlines
        })
    }
}

export default headlineReducer