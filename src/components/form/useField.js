import { useMemo, useCallback, useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { FormContext } from '../../components/form/form'
import { change } from '../../redux/form'

const getValueSelector = name =>
  createSelector(
    store => store.form.values[name],
    store => store.form.errors[name],
    (value, error) => [value, error]
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

export const useFocus = ({ onFocus, onBlur }) => {
  const [focused, setFocused] = useState(false)
  const handleFocus = () => {
    setFocused(true)
    onFocus()
  }
  const handleBlur = () => {
    setFocused(false)
    onBlur()
  }
  return [focused, handleFocus, handleBlur]
}

export default name => {
  const [value, error] = useValue(name) || ''
  const onChange = useChange(name, event => event.target.value)
  const { validate } = useContext(FormContext)
  const handleFocus = () => {
    console.info('focused')
  }
  const handleBlur = () => {
    validate(name)
  }
  const [focused, onFocus, onBlur] = useFocus({
    onFocus: handleFocus,
    onBlur: handleBlur,
  })

  return [value, error, onChange, focused, onFocus, onBlur]
}
