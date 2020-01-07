export const CHANGE = "task-sendsay/form/change"

export default function formReducer(state = {}, action) {
  console.info('def form', state)
  switch (action.type) {
    case CHANGE:
      return state
    default:
      return state
  }
}

export const change = value => ({
  type: CHANGE,
  value,
})
