import React from 'react'
import styled from 'styled-components'
import Attaches from './fields/attaches'
import Input from './fields/input'
import InputGroup from './atoms/input-group'
import TextArea from './fields/text-area'
import FilesCatcher from './fields/files-catcher'
import SubmitButton from './atoms/submit-button'
import { useDispatch, useSelector } from 'react-redux'
import { sendAndTrack } from '../redux/messages'
import Label from './atoms/label'
import Row from './atoms/row'
import Form from './form'

const Header = styled.h2`
  color: black;
  margin-bottom: 20px;
  font-weight: normal;
  font-size: 1.875rem;
  line-height: 40px;
`

export default () => {
  const dispatch = useDispatch()
  const form = useSelector(({ form }) => form)

  const handleSubmit = () => {
    //dispatch(sendAndTrack(form))
  }

  const validator = {
    senderEmail: value =>
      (!value || value.length < 0) && 'Email не может быть пустым',
  }

  return (
    <Form onSubmit={handleSubmit} validation={validator}>
      <FilesCatcher name='attaches'>
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
          <Attaches name='attaches' />
        </Row>
        <SubmitButton>Отправить</SubmitButton>
      </FilesCatcher>
    </Form>
  )
}
