import React, { Component } from 'react'

export default class ClearButton extends React.Component {
  render() {
    const { handleClear, buttonDisabled } = this.props
    return(
      <div>
        <button
          className='clearBtn'
          onClick={handleClear}
          disabled={buttonDisabled}>Clear
        </button>
      </div>
    )
  }
}
