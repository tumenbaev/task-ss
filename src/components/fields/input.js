import React from 'react'
import Input from '../atoms/input'
import { connect } from 'react-redux'
import { change } from '../../redux/form'

const mapStateToProps = (state, ownProps) => {
  const { form } = state
  return {
    value: form[ownProps.name],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: event => dispatch(change(event.target.value)),
  }
}

function InputField({ value, name, onChange }) {
  return <Input type="text" value={value} name={name} onChange={onChange} />
}

export default connect(mapStateToProps, mapDispatchToProps)(InputField)
