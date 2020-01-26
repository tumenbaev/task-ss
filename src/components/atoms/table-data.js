import styled from 'styled-components'

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

export default TableData
