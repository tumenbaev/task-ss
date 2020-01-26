import React from 'react'
import styled from 'styled-components'

const Status = styled.div`
  margin: 0 30px;
`

const Header2 = styled.h2`
  font-size: 1.5rem;
  line-height: 30px;
  font-weight: normal;
  margin-bottom: 20px;
`

const Table = styled.table`
  table-layout: fixed;
  line-height: 25px;
`

const TableHeader = styled.th`
  border-bottom: 1px solid #ddd;
  padding: 0 0 10px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.4);

  :first-child {
    width: 120px;
  }
  :last-child {
    width: 130px;
    text-align: right;
  }
`

const TableData = styled.td`
  border: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px 0 5px;

  :last-child {
    text-align: right;
  }
`

const getColor = status => {
  switch (status) {
    case 'error':
      return '#FF6666'
    case 'pending':
      return 'rgba(0, 0, 0, 0.4)'
    default:
      return '#03A100'
  }
}
const ColoredTableData = styled(TableData)`
  color: ${props => getColor(props.status)};
`

export default foo => {
  return (
    <Status>
      <Header2>Отправленные сообщения</Header2>
      <Table>
        <tbody>
          <tr>
            <TableHeader>Дата</TableHeader>
            <TableHeader>Тема</TableHeader>
            <TableHeader>Статус</TableHeader>
          </tr>
          <tr>
            <TableData>30 Сентября</TableData>
            <TableData>
              Тема письма Тема письма Тема письма Тема письма Тема письма
            </TableData>
            <ColoredTableData>Отправлено</ColoredTableData>
          </tr>
          <tr>
            <TableData>30 Сентября</TableData>
            <TableData>
              Тема письма Тема письма Тема письма Тема письма Тема письма
            </TableData>
            <ColoredTableData status='error'>Ошибка</ColoredTableData>
          </tr>
          <tr>
            <TableData>30 Сентября</TableData>
            <TableData>
              Тема письма Тема письма Тема письма Тема письма Тема письма
            </TableData>
            <ColoredTableData status='pending'>В очереди</ColoredTableData>
          </tr>
        </tbody>
      </Table>
    </Status>
  )
}
