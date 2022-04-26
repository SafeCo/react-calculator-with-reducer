import React from 'react'

const Display = ({currentOperation}) => {
  return (
    <div id='display-container'>
        <h1>{currentOperation}</h1>
    </div>
  )
}

export default Display