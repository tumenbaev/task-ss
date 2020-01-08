import Clip from '../../assets/clip.svg'
import AttachButton from '../atoms/attach-button'
import React from 'react'

const Attach = () => (
  <AttachButton>
    <Clip />
    <span>Прикрепить файл</span>
  </AttachButton>
)

export default Attach
