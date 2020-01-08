export const SEND = 'task-sendsay/api/send'

export const send = payload => ({
  type: SEND,
  sendsay: payload,
})
