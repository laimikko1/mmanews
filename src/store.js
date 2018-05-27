import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import newsReducer from './reducers/newsReducer'
import headlineReducer from './reducers/headlineReducer'
import eventReducer from './reducers/eventReducer'
import fighterReducer from './reducers/fighterReducer'

const reducer = combineReducers({
    headlines: headlineReducer,
    news: newsReducer,
    events: eventReducer,
    fighters: fighterReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
export default store