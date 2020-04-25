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
  if (action.response !== undefined) {
    return {
      ...state,
      data: dataReducer(state.data, action),
    }
  }
  return state
}

const dataReducer = (state, action) => {
  switch (action.type) {
    case String(send): {
      return {
        ...state,
        [action.response]: {
          ...action.payload,
          date: action.date,
          status: 0,
        },
      }
    }
    case String(track): {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          status: action.response,
        },
      }
    }
    default:
      return state
  }
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
