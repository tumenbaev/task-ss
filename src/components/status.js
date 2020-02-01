import React from 'react'
import styled from 'styled-components'
import TableHeader from './atoms/table-header'
import Table from './atoms/table'
import TableRow from './molecules/table-row'
import { useSelector } from 'react-redux'

const Status = styled.div`
  margin: 0 30px;
`

const Header2 = styled.h2`
  font-size: 1.5rem;
  line-height: 30px;
  font-weight: normal;
  margin-bottom: 20px;
`

export default () => {
  const data = useSelector(store => {
    return store.messages.data
  })
  const messageIds = Object.keys(data)

  if (messageIds.length === 0) {
    return null
  }

  return (
    <Status>
      <Header2>Отправленные сообщения</Header2>
      <Table>
        <tr>
          <TableHeader>Дата</TableHeader>
          <TableHeader>Тема</TableHeader>
          <TableHeader>Статус</TableHeader>
        </tr>
        {messageIds.map(id => {
          const { subject, status, date } = data[id]
          return <TableRow subject={subject} status={status} date={date} />
        })}
      </Table>
    </Status>
  )
}
