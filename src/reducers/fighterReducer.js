import fighterService from '../services/fighter'

const fighterReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_FIGHTERS':
            return action.data
        case 'INIT_TITLE_HOLDERS':
            return action.data
        default:
            return state
    }
}

export const initializeFighters = () => {
    return async (dispatch) => {
        const fighters = await fighterService.getAll()
        dispatch({
            type: 'INIT_FIGHTERS',
            data: fighters
        })
    }
}

export const initializeTitleHolders = () => {
    return async (dispatch) => {
        const titleholders = await fighterService.getAllTitleHolders()
            dispatch({
                type: 'INIT_TITLE_HOLDERS',
                data: titleholders
            })
    }
}

export default fighterReducer