import Sendsay from 'sendsay-api/dist/sendsay-api.cjs'
import { SS_SEND, SS_TRACK } from './actions'
const apiKey =
  '18WL7bxHBYLz4AlAJeJs3paxcyOoB_k3YlERb13fFB8bu5d-08ruJ4dDXCq7hopbA1Rhet-I29WsidEUH'

let sendsay

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      let encoded = reader.result.toString().replace(/^data:(.*,)?/, '')
      if (encoded.length % 4 > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4))
      }
      resolve({ name: file.name, content: encoded })
    }
    reader.onerror = error => reject(error)
  })
}

const api = {
  send: ({ subject, from, to, message, attaches }) => {
    return Promise.all(attaches.map(attach => toBase64(attach)))
      .then(encodedAttaches =>
        sendsay.performRequest({
          action: SS_SEND,
          letter: {
            subject,
            'from.name': from.name,
            'from.email': from.email,
            'to.name': to.name,
            message: { text: message },
            attaches: encodedAttaches.map(({ name, content }) => ({
              name,
              content,
              encoding: 'base64',
            })),
          },
          sendwhen: 'test',
          mca: [to.email],
        })
      )
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
