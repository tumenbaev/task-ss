import { getApi } from './api'
import { send, track } from '../redux/messages'

const getActionsMap = api => ({
  [send]: action => api.send(action),
  [track]: action => api.track(action),
})

const sendsayMiddleware = store => next => {
  const api = getApi()
  const actionsMap = getActionsMap(api)

  return action => {
    if (!action.meta || !action.meta.sendsay) {
      return next(action)
    }
    const { type, payload } = action

    next({ type, payload, pending: true })

    return actionsMap[type](payload).then(
      response => next({ type, payload, response }),
      error => next({ type, payload, error })
    )
  }
}

export default sendsayMiddleware
