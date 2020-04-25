import { createAction } from 'redux-act'

export const change = createAction('task-sendsay/form/change')
export const setError = createAction('task-sendsay/form/setError')
export const setFile = createAction('task-sendsay/form/setFile')
export const deleteFile = createAction('task-sendsay/form/deleteFile')

const initialState = {
  values: {},
  errors: {},
}

function filesReducer(state = [], action) {
  const { payload } = action
  switch (action.type) {
    case String(setFile):
      const newFiles = [...payload.files].filter(
        newFile => !state.some(file => file.name === newFile.name)
      )
      return newFiles.length ? [...state, ...newFiles] : state
    case String(deleteFile):
      const { label } = payload
      return state.filter(item => item.name !== label)
    default:
      return state
  }
}

export default function formReducer(state = initialState, action) {
  const { payload } = action
  switch (action.type) {
    case String(change): {
      const { name, value } = payload
      return {
        ...state,
        values: {
          ...state.values,
          [name]: value,
        },
      }
    }
    case String(setError): {
      const { name, error } = payload
      return {
        ...state,
        errors: {
          ...state.errors,
          [name]: error,
        },
      }
    }
    case String(setFile):
    case String(deleteFile):
      const { field } = payload
      return {
        ...state,
        [field]: filesReducer(state[field], action),
      }
    default:
      return state
  }
}
