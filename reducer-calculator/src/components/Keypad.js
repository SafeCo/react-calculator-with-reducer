import React from 'react'
import DigitButton from './DigitButton'
const Keypad = () => {
  return (
    <div id='keypad-container'>
        <div id='keypad-button-container' >
            <DigitButton  symbol='AC' />
            <DigitButton  symbol='DEL' />
            <DigitButton  symbol='/' />
            <DigitButton  symbol='+' />
            <DigitButton  symbol='-' />
            <DigitButton  symbol='x' />
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
            <DigitButton  symbol='=' />
        </div>
    </div>
  )
}

export default Keypad