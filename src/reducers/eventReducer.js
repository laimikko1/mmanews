import eventService from '../services/event'

const eventReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_EVENTS':
            return action.data
        default:
            return state
    }
}

export const initializeEvents = () => {
    return async (dispatch) => {
        const events = await eventService.getAll()
        dispatch({
            type: 'INIT_EVENTS',
            data: events
        })
    }
}

export default eventReducer