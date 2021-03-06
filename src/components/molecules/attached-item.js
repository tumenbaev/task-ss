import React, { memo, useMemo, useCallback } from 'react'
import styled from 'styled-components'
import LinkButton from '../atoms/link-button'
import Trash from '../../assets/trash.svg'
import Icon from '../atoms/icon'
import Clip from '../../assets/clip.svg'

const Wrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 15px 10px 10px;
  line-height: 20px;
  min-width: 0;

  * + * {
    margin-left: 10px;
  }
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

const AttachedItem = ({ label = '', onClick }) => {
  const [fileName, extension] = useMemo(() => splitLabel(label), [label])
  const handleClick = useCallback(() => onClick(label), [onClick, label])

  return (
    <Wrap>
      <Label>
        <Icon>
          <LargeClip />
        </Icon>
        <LabelText>{fileName}</LabelText>
        {extension}
      </Label>
      <LinkButton danger type='button' onClick={handleClick}>
        <Icon>
          <Trash />
        </Icon>
        <span>Удалить</span>
      </LinkButton>
    </Wrap>
  )
}

export default memo(AttachedItem)
