import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { CounterReducer } from './features/counter'
import catFactReducer from './redux/ducks/catFactDuck/catFactDuck_Reducer'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: CounterReducer,
  catFact: catFactReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
