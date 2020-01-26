import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { useMemo, useCallback } from 'react'
import { change } from '../form'

const getValueSelector = name =>
  createSelector(
    store => store.form[name],
    value => value || ''
  )

export default name => {
  const valueSelector = useMemo(() => getValueSelector(name), [name])
  const value = useSelector(valueSelector)
  const dispatch = useDispatch()
  const onChange = useCallback(
    event => {
      dispatch(change(name, event.target.value))
    },
    [dispatch, name]
  )

  return [value, onChange]
}
