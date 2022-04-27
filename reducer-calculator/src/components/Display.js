import React from 'react'

const Display = ({currentOperation, previousOperation}) => {
  return (
    <div id='display-container'>
        <h1>{previousOperation}</h1>
        <h1>{currentOperation}</h1>
    </div>
  )
}

export default Display