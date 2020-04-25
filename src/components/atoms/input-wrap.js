import styled, { css } from 'styled-components'

const InputWrap = styled.label`
  border: 1px solid #dddddd;
  position: relative;
  border-radius: 5px;
  display: block;

  ${({ focused }) =>
    focused &&
    css`
      margin-left: -1px;
      margin-top: -1px;
      margin-bottom: -1px;
      border: 2px solid #45a5ff;
      z-index: 1;
    `}
`

export default InputWrap
