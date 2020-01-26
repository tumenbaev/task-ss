import styled from 'styled-components'

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

export default TableHeader
