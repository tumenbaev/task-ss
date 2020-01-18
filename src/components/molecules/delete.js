import React, { useMemo } from 'react'
import styled from 'styled-components'
import LinkButton from '../atoms/link-button'
import Trash from '../../assets/trash.svg'
import Icon from '../atoms/icon'
import Clip from '../../assets/clip.svg'

const DeleteWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 15px 10px 10px;
  font-size: 16px;
  line-height: 20px;
  min-width: 0;
`

const LargeClip = styled(Clip)`
  width: 34px;
  height: 30px;
  fill: #000;
  opacity: 0.4;
`

const Label = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  min-width: 0;
`

const LabelText = styled.span`
  margin-left: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const splitLabel = label => {
  const chunks = label.split('.')
  const extension = chunks.pop()
  return [chunks.join('.'), '.' + extension]
}

const Delete = ({ label = '' }) => {
  const [fileName, extension] = useMemo(() => splitLabel(label), [label])

  return (
    <DeleteWrap>
      <Label>
        <Icon>
          <LargeClip />
        </Icon>
        <LabelText>{fileName}</LabelText>
        {extension}
      </Label>
      <LinkButton danger>
        <Icon>
          <Trash />
        </Icon>
        <span>Удалить</span>
      </LinkButton>
    </DeleteWrap>
  )
}

export default Delete
