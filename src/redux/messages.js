export const SEND = 'task-sendsay/messages/send'
export const TRACK = 'task-sendsay/messages/track'

const initialState = {
  data: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND: {
      if (action.response) {
        return {
          ...state,
          data: dataReducer(state.data, action),
        }
      }
      break
    }
    case TRACK: {
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
    case SEND: {
      if (action.response) {
        return {
          ...state,
          [action.response]: {
            ...action.payload,
            status: 0,
          },
        }
      }
      break
    }
    case TRACK: {
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

export const send = payload => ({
  type: SEND,
  sendsay: payload,
})

export const track = payload => ({
  type: TRACK,
  sendsay: { id: payload },
})

const trackTillEnd = id => dispatch => {
  let resolve
  const promise = new Promise(r => {
    resolve = r
  })

  const loop = id =>
    dispatch(track(id)).then(({ response: status }) => {
      if (status >= 0) {
        setTimeout(loop.bind(null, id), 1000)
      } else {
        resolve(status)
      }
    })

  loop(id)

  return promise
}

export const sendAndTrack = payload => dispatch => {
  return dispatch(send(payload)).then(({ response: id }) => {
    window.scrollTo(0, document.body.scrollHeight)
    return dispatch(trackTillEnd(id))
  })
}
