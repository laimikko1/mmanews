import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import newsReducer from './reducers/newsReducer'
import headlineReducer from './reducers/headlineReducer'
import eventReducer from './reducers/eventReducer'

const reducer = combineReducers({
    headlines: headlineReducer,
    news: newsReducer,
    events: eventReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store