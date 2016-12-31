import React, { Component } from 'react'
import ClearButton from './ClearButton'
import SubmitButton from './SubmitButton'
import ResetButton from './ResetButton'

export default class Controls extends React.Component {
  render() {
    const { guess, handleChange, handleSubmit, buttonDisabled, handleClear, handleReset, resetDisabled } = this.props
    return (
        <div className='body'>
          <input className='user-guess'
            // type='number'
            value={guess}
            placeholder='Your best guess'
            onChange={handleChange}>
          </input>
          < br/>
          <SubmitButton
            handleSubmit={handleSubmit}
            buttonDisabled={buttonDisabled}
          />
          <ClearButton
            handleClear={handleClear}
            buttonDisabled={buttonDisabled}
          />
          <br/>
          <ResetButton
            handleReset={handleReset}
            resetDisabled={resetDisabled}
          />
        </div>
    )
  }
}
