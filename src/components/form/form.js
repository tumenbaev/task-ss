import React, { memo, createContext, useCallback, useMemo, useRef } from 'react'
import FormAtom from '../atoms/form'
import { createSelector } from 'reselect'
import { useDispatch, useSelector } from 'react-redux'
import { setError } from '../../redux/form'

export const FormContext = createContext()

const hasTruthy = values => {
  return Object.values(values).some(value => value)
}

function Form({ onSubmit, children, validation }) {
  const dispatch = useDispatch()

  const valuesSelector = useMemo(
    () =>
      createSelector(
        store => store.form.values,
        value => value
      ),
    []
  )

  const errorsSelector = useMemo(
    () =>
      createSelector(
        store => store.form.errors,
        errors => errors
      ),
    []
  )

  const values = useSelector(valuesSelector)
  const errors = useSelector(errorsSelector)

  const shouldSubmit = useRef(false)

  if (shouldSubmit.current) {
    if (!hasTruthy(errors)) {
      onSubmit()
    }
    shouldSubmit.current = false
  }

  const validate = name => {
    const validator = validation[name]

    if (validator) {
      console.info('validate', name, values[name])
      const error = validator(values[name])

      dispatch(setError({ name, error }))
    }
  }

  const handleSubmit = useCallback(
    event => {
      event.preventDefault()

      for (let field of Object.keys(validation)) {
        validate(field)
      }
      shouldSubmit.current = true
    },
    [validate]
  )

  return (
    <FormAtom onSubmit={handleSubmit}>
      <FormContext.Provider value={{ validate }}>
        {children}
      </FormContext.Provider>
    </FormAtom>
  )
}

export default memo(Form)
