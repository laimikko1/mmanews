import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import newsReducer from './reducers/newsReducer'
import headlineReducer from './reducers/headlineReducer'

const reducer = combineReducers({
    headlines: headlineReducer,
    news: newsReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store