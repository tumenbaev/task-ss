import React, { memo, useState } from 'react'
import Input from '../atoms/input'
import InputWrap from '../atoms/input-wrap'
import useField from '../form/useField'
import FieldWrap from '../atoms/field-wrap'
import Error from '../atoms/error'

function InputField({ name, placeholder }) {
  const [value, error, onChange, focused, onFocus, onBlur] = useField(name)

  return (
    <FieldWrap>
      <InputWrap focused={focused}>
        <Input
          type='text'
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </InputWrap>
      <Error>{error}</Error>
    </FieldWrap>
  )
}

export default memo(InputField)
