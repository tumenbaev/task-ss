import React, { useRef, useEffect } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sendsay from "sendsay-api/dist/sendsay-api.cjs"

const apiKey =
  "18WL7bxHBYLz4AlAJeJs3paxcyOoB_k3YlERb13fFB8bu5d-08ruJ4dDXCq7hopbA1Rhet-I29WsidEUH"

const Form = styled.form`
  border: 1px solid lightgray;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
`

const Button = styled.button`
  padding: 5px 20px;
`

const IndexPage = () => {
  const instance = useRef({})

  useEffect(() => {
    const sendsay = new Sendsay({ apiKey })
    instance.current.sendsay = sendsay
    /*
    sendsay.performRequest({
      action: "issue.send.test",
      letter: {
        subject: "Тема письма",
        "from.name": "Имя отправителя",
        "from.email": "tumenbaev@gmail.com",
        "to.name": "Имя получателя",
        message: { text: "текстовая версия письма" },
      },
      sendwhen: "test",
      mca: ["tumenbaev@gmail.com"],
    }).then(response => {
      return sendsay.performRequest({
        action: 'track.get',
        id: response['track.id']
      })
    }).then(response => {
      console.info(response)
    }).catch(error => {
      console.info(error)
    })
     */
    console.info("inst", sendsay)
  })


  return (
    <Layout>
      <SEO title="Home" />
      <Form>
        <label>
          <input type="text" />
        </label>
        <Button>Отправить</Button>
      </Form>
    </Layout>
  )
}

export default IndexPage
