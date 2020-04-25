import { createSelector } from 'reselect'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

const getValueSelector = name =>
  createSelector(
    store => store.form.values[name],
    value => value
  )

export const useValue = name => {
  const valueSelector = useMemo(() => getValueSelector(name), [name])
  return useSelector(valueSelector)
}
