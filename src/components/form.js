import React from 'react'
import styled from 'styled-components'
import AttachButton from './molecules/attach'
import Input from './fields/input'
import InputGroup from './atoms/input-group'
import TextArea from './fields/text-area'
import SubmitButton from './atoms/submit-button'
import { useDispatch, useSelector } from 'react-redux'
import { send } from '../redux/api'

const Form = styled.form`
  background: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 30px;
`

const Header = styled.h1`
  color: black;
  margin-bottom: 20px;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
`

const Row = styled.div`
  margin-bottom: 20px;
`

const Label = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 5px;
`

export default () => {
  const dispatch = useDispatch()
  const payload = useSelector(store => {
    const { form } = store
    const {
      subject,
      senderName,
      senderEmail,
      receiverName,
      receiverEmail,
      message,
    } = form
    return {
      subject,
      from: { name: senderName, email: senderEmail },
      to: { name: receiverName, email: receiverEmail },
      message,
    }
  })

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(send(payload))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Header>Отправлялка сообщений</Header>
      <Row>
        <Label>От кого</Label>
        <InputGroup>
          <Input name='senderName' placeholder='Имя' />
          <Input name='senderEmail' placeholder='Email' />
        </InputGroup>
      </Row>
      <Row>
        <Label>Кому</Label>
        <InputGroup>
          <Input name='receiverName' placeholder='Имя' />
          <Input name='receiverEmail' placeholder='Email' />
        </InputGroup>
      </Row>
      <Row>
        <Label>Тема письма</Label>
        <Input name='subject' />
      </Row>
      <Row>
        <Label>Сообщение</Label>
        <TextArea name='message' />
        <AttachButton />
      </Row>
      <SubmitButton>Отправить</SubmitButton>
    </Form>
  )
}
