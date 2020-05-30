// The types of actions that you can dispatch to modify the state of the store
export const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
  }


  // action creator for add todo 
export const addTodoAction =(todo)=> {
    return {
      type : ADD ,
      todo
    }
}

  // action creator for add todo 
  export const removeTodoAction =(todo)=> {
    return {
      type : REMOVE ,
      todo
    }
}
