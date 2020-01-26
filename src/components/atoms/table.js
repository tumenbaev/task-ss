import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
  table-layout: fixed;
  line-height: 25px;
`

export default ({ children, ...props }) => {
  return (
    <Table {...props}>
      <tbody>{children}</tbody>
    </Table>
  )
}
