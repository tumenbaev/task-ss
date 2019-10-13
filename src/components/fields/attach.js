import styled from "styled-components"
import Clip from "../../assets/clip.svg"
import React from "react"

const Attach = styled.button`
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  vertical-align: middle;
  color: #0055fb;
  font-size: 16px;
  line-height: 20px;

  > span {
    margin-left: 5px;
  }
`

const AttachButton = () => (
  <Attach>
    <Clip />
    <span>Прикрепить файл</span>
  </Attach>
)

export default AttachButton
