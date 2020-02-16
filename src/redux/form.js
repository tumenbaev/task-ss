export const CHANGE = 'task-sendsay/form/change'
export const DELETE_FILE = 'task-sendsay/form/deleteFile'

const initialState = {
  senderName: 'foo',
  senderEmail: 'tumenbaev@gmail.com',
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
    case DELETE_FILE:
      const { label, field } = action
      return {
        ...state,
        [field]: state[field].filter(item => item.name !== label),
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

export const deleteFile = (label, field) => ({
  type: DELETE_FILE,
  label,
  field,
})
