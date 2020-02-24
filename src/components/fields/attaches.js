import React, { memo, useCallback } from 'react'
import Attach from '../molecules/attach'
import { useValue } from '../../redux/utils/useField'
import Grid from '../atoms/grid'
import AttachedItem from '../molecules/attached-item'
import { useDispatch } from 'react-redux'
import { setFile, deleteFile } from '../../redux/form'

function AttachesField({ name }) {
  const dispatch = useDispatch()
  const files = useValue(name) || []

  const onChange = useCallback(
    event => {
      dispatch(setFile(name, event.target.files))
    },
    [name, dispatch]
  )

  const handleDelete = useCallback(
    label => {
      dispatch(deleteFile(name, label))
    },
    [name, dispatch]
  )

  return (
    <>
      <Grid>
        {files.map(({ name: label }, index) => (
          <AttachedItem label={label} key={index} onClick={handleDelete} />
        ))}
      </Grid>
      <Attach
        key={files.reduce((acc, file) => acc + file.name, '')}
        name={name}
        onChange={onChange}
        multiple
        accept='.jpg,.jpeg,.png,.doc,.xls,.pdf,.zip'
      />
    </>
  )
}

export default memo(AttachesField)
