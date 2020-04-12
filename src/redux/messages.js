import { createAction } from 'redux-act'

function createSendsayAction(action) {
  return createAction(
    action,
    payload => payload,
    () => ({ sendsay: true })
  )
}

export const send = createSendsayAction('task-sendsay/messages/send')
export const track = createSendsayAction('task-sendsay/messages/track')

const initialState = {
  data: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case String(send): {
      if (action.response) {
        return {
          ...state,
          data: dataReducer(state.data, action),
        }
      }
      break
    }
    case String(track): {
      if (action.response !== undefined) {
        return {
          ...state,
          data: dataReducer(state.data, action),
        }
      }
      break
    }
    default:
      return state
  }

  return state
}

const dataReducer = (state, action) => {
  switch (action.type) {
    case String(send): {
      if (action.response) {
        return {
          ...state,
          [action.response]: {
            ...action.payload,
            date: action.date,
            status: 0,
          },
        }
      }
      break
    }
    case String(track): {
      if (action.response !== undefined) {
        return {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            status: action.response,
          },
        }
      }
      break
    }
    default:
      return state
  }

  return state
}

const trackTillEnd = id => dispatch => {
  let resolve
  const promise = new Promise(r => {
    resolve = r
  })

  const loop = id =>
    dispatch(track({ id })).then(({ response: status }) => {
      if (status >= 0) {
        setTimeout(loop.bind(null, id), 1000)
      } else {
        resolve(status)
      }
    })

  loop(id)

  return promise
}

export const sendAndTrack = form => dispatch => {
  const payload = {
    ...form,
    date: Date.now(),
  }
  return dispatch(send(payload)).then(({ response: id }) => {
    window.scrollTo(0, document.body.scrollHeight)
    return dispatch(trackTillEnd(id))
  })
}
