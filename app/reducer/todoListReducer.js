import { combineReducers } from "redux"
import { addTodoAction, removeTodoAction } from '../action'

  
  // Initial state of the store
  const initialState = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
  }

  // Function to handle actions and update the state of the store.

  export const reducer = (state = initialState, action) => {
    const { todos } = state
    const { type, payload } = action
  switch (type) {
      case addTodoAction: {
        return {
          ...state,
          todos: [payload, ...todos],
        }
      }
      case removeTodoAction: {
        return {
          ...state,
          todos: todos.filter((todo, i) => i !== payload),
        }
      }
    }
  return state
  }
  