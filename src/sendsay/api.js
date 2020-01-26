import Sendsay from 'sendsay-api/dist/sendsay-api.cjs'
import { SS_SEND, SS_TRACK } from './actions'
const apiKey =
  '18WL7bxHBYLz4AlAJeJs3paxcyOoB_k3YlERb13fFB8bu5d-08ruJ4dDXCq7hopbA1Rhet-I29WsidEUH'

let sendsay

const api = {
  send: ({ subject, from, to, message }) => {
    return sendsay
      .performRequest({
        action: SS_SEND,
        letter: {
          subject,
          'from.name': from.name,
          'from.email': from.email,
          'to.name': to.name,
          message: { text: message },
        },
        sendwhen: 'test',
        mca: [to.email],
      })
      .then(response => response['track.id'])
  },
  track: ({ id }) => {
    return sendsay
      .performRequest({
        action: SS_TRACK,
        id,
      })
      .then(response => response.obj.status)
  },
}

export const getApi = () => {
  if (!sendsay) {
    sendsay = new Sendsay({ apiKey })
  }
  return api
}
