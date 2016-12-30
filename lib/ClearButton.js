import React, { Component } from 'react'

export default class ClearButton extends React.Component {
  render() {
    const { handleClear, buttonDisabled } = this.props
    return(
      <div className='button'>
        <button
          className='clearBtn'
          onClick={handleClear}
          disabled={buttonDisabled}>Clear
        </button>
      </div>
    )
  }
}
