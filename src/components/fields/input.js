import React, { memo } from 'react'
import Input from '../atoms/input'
import useField from '../../redux/useField'

function InputField({ name }) {
  const [value, onChange] = useField(name)
  return <Input type='text' value={value} name={name} onChange={onChange} />
}

export default memo(InputField)
