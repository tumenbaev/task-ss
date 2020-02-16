import React, { memo } from 'react'
import Clip from '../../assets/clip.svg'
import LinkButton from '../atoms/link-button'
import Icon from '../atoms/icon'
import styled from 'styled-components'

const InputFileLabel = styled.label`
  display: inline-block;
`

const InputFile = styled.input`
  display: none;
`

const Attach = props => (
  <InputFileLabel>
    <InputFile type='file' {...props} />
    <LinkButton as='span'>
      <Icon>
        <Clip />
      </Icon>
      <span>Прикрепить файл</span>
    </LinkButton>
  </InputFileLabel>
)

export default memo(Attach)
