import styled from 'styled-components'

const TextArea = styled.textarea`
  font-size: 16px;
  line-height: 25px;
  outline: none;
  border: 1px solid #dddddd;
  border-radius: 5px;
  width: 100%;
  resize: none;
  min-height: 140px;
  padding: 10px;

  :focus {
    border: 2px solid #45a5ff;
    margin-left: -1px;
  }
`

export default TextArea
