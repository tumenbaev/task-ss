import { getApi } from './api'
import { SEND } from '../redux/api'

const getActionsMap = api => ({
  [SEND]: action => {
    const { subject, from, to, message } = action
    return api.send({ subject, from, to, message })
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

    next({ type, pending: true })
    return actionsMap[type](action.sendsay).then(
      response => next({ type, response }),
      error => next({ type, error })
    )
  }
}

export default sendsayMiddleware
