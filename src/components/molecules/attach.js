import React from 'react'
import Clip from '../../assets/clip.svg'
import LinkButton from '../atoms/link-button'
import Icon from '../atoms/icon'

const Attach = () => (
  <LinkButton>
    <Icon>
      <Clip />
    </Icon>
    <span>Прикрепить файл</span>
  </LinkButton>
)

export default Attach
