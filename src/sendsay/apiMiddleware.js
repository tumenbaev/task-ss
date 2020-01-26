import { getApi } from './api'
import { SEND, TRACK } from '../redux/messages'

const getActionsMap = api => ({
  [SEND]: action => {
    const { subject, from, to, message } = action
    return api.send({ subject, from, to, message })
  },
  [TRACK]: action => {
    const { id } = action
    return api.track({ id })
  },
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

    next({ type, payload, pending: true })
    return actionsMap[type](payload).then(
      response => next({ type, payload, response }),
      error => next({ type, payload, error })
    )
  }
}

export default sendsayMiddleware
