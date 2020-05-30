import { createStore } from 'redux'
import { reducer } from '../reducer/todoListReducer'
// Create a store with our reducer
const store = createStore(reducer)
export default store
