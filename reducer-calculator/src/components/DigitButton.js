import React, {useContext} from 'react'
import { OperationsContext } from '../Contexts/OperationsContext'
import { ACTIONS } from '../App'


const DigitButton = ({symbol}) => {
  const {dispatch} = useContext(OperationsContext)
  return (
    <button onClick={()=>{dispatch({ type: ACTIONS.ADD_DIGIT, payload: symbol })}} >{symbol}</button>
  )
}

export default DigitButton