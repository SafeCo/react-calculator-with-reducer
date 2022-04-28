import React from 'react'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'
import ClearButton from './ClearButton'
import DeleteButton from './DeleteButton'
import EvaluateButton from './Evaluate'

const Keypad = () => {
  return (
    <div id='keypad-container'>
        <div id='keypad-button-container' >
            <ClearButton  symbol='AC' />
            <DeleteButton  symbol='DEL' />
            <OperationButton  symbol='/' />
            <OperationButton  symbol='+' />
            <OperationButton  symbol='-' />
            <OperationButton  symbol='x' />
            <DigitButton  symbol='7' />
            <DigitButton  symbol='8' />
            <DigitButton  symbol='9' />
            <DigitButton  symbol='4' />
            <DigitButton  symbol='5' />
            <DigitButton  symbol='6' />
            <DigitButton  symbol='1' />
            <DigitButton  symbol='2' />
            <DigitButton  symbol='3' />
            <DigitButton  symbol='.' />
            <DigitButton  symbol='0' />
            <EvaluateButton  symbol='=' />
        </div>
    </div>
  )
}

export default Keypad