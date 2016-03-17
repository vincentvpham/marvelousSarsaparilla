const pakt = (state, action) => {
  switch (action.type) {
    case 'ADD_PAKT':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_PAKT':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

const pakts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PAKT':
      return [
        ...state,
        pakt(undefined, action)
      ]
    case 'TOGGLE_PAKT':
      return state.map(t =>
        pakt(t, action)
      )
    default:
      return state
  }
}

export default pakts
