import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { useMemo, useCallback } from 'react'
import { change } from '../form'

const getValueSelector = name =>
  createSelector(
    store => store.form[name],
    value => value
  )

export const useValue = name => {
  const valueSelector = useMemo(() => getValueSelector(name), [name])
  return useSelector(valueSelector)
}

export const useChange = (name, getValue) => {
  const dispatch = useDispatch()
  return useCallback(
    event => {
      dispatch(change({ name, value: getValue(event) }))
    },
    [dispatch, name, getValue]
  )
}

export default name => {
  const value = useValue(name) || ''
  const onChange = useChange(name, event => event.target.value)

  return [value, onChange]
}
