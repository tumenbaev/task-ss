import styled from 'styled-components'

const Input = styled.input`
  outline: none;
  width: 100%;
  border: 1px solid #dddddd;
  position: relative;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1.125rem;

  :focus {
    margin-left: -1px;
    margin-top: -1px;
    margin-bottom: -1px;
    border: 2px solid #45a5ff;
    z-index: 1;
  }

  ::placeholder {
    opacity: 0.4;
  }
`

export default Input
