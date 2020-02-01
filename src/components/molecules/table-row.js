import React from 'react'
import TableData from '../atoms/table-data'
import styled from 'styled-components'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

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

const getStatus = status => {
  if (status >= 0) {
    return ['pending', 'В очереди']
  }
  if (status === -1) {
    return ['', 'Отправлено']
  }
  return ['error', 'Ошибка']
}

export default ({ date, subject, status }) => {
  const [statusCode, statusText] = getStatus(+status)
  const formattedDate = !date ? '' : format(date, 'dd MMMM', { locale: ru })

  return (
    <tr>
      <TableData>{formattedDate}</TableData>
      <TableData>{subject}</TableData>
      <ColoredTableData status={statusCode}>{statusText}</ColoredTableData>
    </tr>
  )
}
