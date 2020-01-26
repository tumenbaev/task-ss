import styled from 'styled-components'

const LinkButton = styled.button`
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  vertical-align: middle;
  color: ${props => (props.danger ? '#FF6666' : '#0055fb')};
  line-height: 20px;
  background: none;

  > span {
    margin-left: 5px;
  }
`

export default LinkButton
