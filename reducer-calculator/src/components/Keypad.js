import React from 'react'
import Button from './Button'
const Keypad = () => {
  return (
    <div id='keypad-container'>
        <ul id='keypad-button-container' >
            <Button type='clear' symbol='AC' />
            <Button type='delete' symbol='DEL' />
            <Button type='operand' symbol='/' />
            <Button type='operand' symbol='+' />
            <Button type='operand' symbol='-' />
            <Button type='operand' symbol='x' />
            <Button type='number' symbol='7' />
            <Button type='number' symbol='8' />
            <Button type='number' symbol='9' />
            <Button type='number' symbol='4' />
            <Button type='number' symbol='5' />
            <Button type='number' symbol='6' />
            <Button type='number' symbol='1' />
            <Button type='number' symbol='2' />
            <Button type='number' symbol='3' />
            <Button type='dot' symbol='.' />
            <Button type='number' symbol='0' />
            <Button type='equals' symbol='=' />
        </ul>
    </div>
  )
}

export default Keypad