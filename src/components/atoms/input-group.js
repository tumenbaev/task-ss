import styled from 'styled-components'

const InputGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;

  * + * {
    left: -1px;
  }

  > *:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  > *:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export default InputGroup
