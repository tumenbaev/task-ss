import React, { memo, useCallback } from 'react'
import Attach from '../molecules/attach'
import { useValue, useChange } from '../../redux/utils/useField'
import Grid from '../atoms/grid'
import Delete from '../molecules/delete'
import { useDispatch } from 'react-redux'
import { deleteFile } from '../../redux/form'

function AttachesField({ name }) {
  const dispatch = useDispatch()
  const files = useValue(name) || []
  const onChange = useChange(name, event => {
    return [...files, ...event.target.files]
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
        {Array.prototype.map.call(files, ({ name: label }) => (
          <Delete label={label} key={label} onClick={handleDelete} />
        ))}
      </Grid>
      <Attach
        name={name}
        onChange={onChange}
        multiple
        accept='.jpg,.jpeg,.png,.doc,.xls,.pdf,.zip'
      />
    </>
  )
}

export default memo(AttachesField)
