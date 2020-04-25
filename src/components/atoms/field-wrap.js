import styled, { css } from 'styled-components'

const FieldWrap = styled.div`
  width: 100%;

  ${({ focused }) =>
    focused &&
    css`
      margin-left: -1px;
      margin-top: -1px;
      margin-bottom: -1px;
      z-index: 1;
    `}
`

export default FieldWrap
