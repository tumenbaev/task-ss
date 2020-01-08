export const CHANGE = 'task-sendsay/form/change'

const initialState = {
  senderName: 'foo',
  senderEmail: 'noreply@example.com',
  receiverName: 'rfoo',
  receiverEmail: 'tumenbaev@gmail.com',
  subject: 'some subj',
  message: 'message',
}

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      const { name, value } = action
      return {
        ...state,
        [name]: value,
      }
    default:
      return state
  }
}

export const change = (name, value) => ({
  type: CHANGE,
  value,
  name,
})
