export const CHANGE = 'task-sendsay/form/change'
export const SET_FILE = 'task-sendsay/form/setFile'
export const DELETE_FILE = 'task-sendsay/form/deleteFile'

const initialState = {
  senderName: 'foo',
  senderEmail: 'tumenbaev@gmail.com',
  receiverName: 'rfoo',
  receiverEmail: 'tumenbaev@gmail.com',
  subject: 'some subj',
  message: 'message',
}

function filesReducer(state = [], action) {
  switch (action.type) {
    case SET_FILE:
      const newFiles = [...action.files].filter(
        newFile => !state.some(file => file.name === newFile.name)
      )
      return newFiles.length ? [...state, ...newFiles] : state
    case DELETE_FILE:
      const { label } = action
      return state.filter(item => item.name !== label)
    default:
      return state
  }
}

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      const { name, value } = action
      return {
        ...state,
        [name]: value,
      }
    case SET_FILE:
    case DELETE_FILE:
      const { field } = action
      return {
        ...state,
        [field]: filesReducer(state[field], action),
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

export const setFile = (field, files) => ({
  type: SET_FILE,
  files,
  field,
})

export const deleteFile = (field, label) => ({
  type: DELETE_FILE,
  label,
  field,
})
