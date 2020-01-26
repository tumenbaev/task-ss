import React from 'react'
import TableData from '../atoms/table-data'
import styled from 'styled-components'

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

  return (
    <tr>
      <TableData>{date}</TableData>
      <TableData>{subject}</TableData>
      <ColoredTableData status={statusCode}>{statusText}</ColoredTableData>
    </tr>
  )
}
