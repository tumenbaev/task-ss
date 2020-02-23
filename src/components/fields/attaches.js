import React, { memo, useCallback } from 'react'
import Attach from '../molecules/attach'
import { useValue, useChange } from '../../redux/utils/useField'
import Grid from '../atoms/grid'
import AttachedItem from '../molecules/attached-item'
import { useDispatch } from 'react-redux'
import { deleteFile } from '../../redux/form'

function AttachesField({ name }) {
  const dispatch = useDispatch()
  const files = useValue(name) || []
  const onChange = useChange(name, event => {
    const newFiles = [...event.target.files].filter(newFile => {
      return !files.some(file => file.name === newFile.name)
    })
    return [...files, ...newFiles]
  })

  const handleDelete = useCallback(
    label => {
      dispatch(deleteFile(label, name))
    },
    [dispatch, deleteFile, name]
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
