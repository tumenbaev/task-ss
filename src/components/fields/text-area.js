import React, { memo } from 'react'
import TextArea from '../atoms/text-area'
import useField from '../../redux/utils/useField'

function TextAreaField({ name }) {
  const [value, onChange] = useField(name)
  return <TextArea value={value} name={name} onChange={onChange} />
}

export default memo(TextAreaField)
