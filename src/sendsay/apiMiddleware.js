import { getApi } from './api'
import { SEND, TRACK } from '../redux/messages'

const getActionsMap = api => ({
  [SEND]: action => api.send(action),
  [TRACK]: action => api.track(action),
})

const sendsayMiddleware = store => next => {
  const api = getApi()
  const actionsMap = getActionsMap(api)

  return action => {
    if (!action.sendsay) {
      return next(action)
    }
    const { type } = action
    const payload = action.sendsay

    next({ ...action, pending: true, sendsay: null })
    return actionsMap[type](payload).then(
      response => next({ ...action, payload, response, sendsay: null }),
      error => next({ ...action, payload, error, sendsay: null })
    )
  }
}

export default sendsayMiddleware
