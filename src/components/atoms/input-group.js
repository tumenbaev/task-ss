import styled from 'styled-components'

const InputGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;

  * + * > label {
    left: -1px;
  }

  > *:first-child > label {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  > *:last-child > label {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export default InputGroup
