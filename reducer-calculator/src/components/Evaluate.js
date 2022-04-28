import React, {useContext} from 'react'
import { OperationsContext } from '../Contexts/OperationsContext'
import { ACTIONS } from '../App'

const EvaluateButton = ({symbol}) => {
    const {dispatch} = useContext(OperationsContext)
  return (
    <button  onClick={()=>{dispatch({ type: ACTIONS.EVALUATE, payload: symbol })}}>{symbol}</button>
  )
}

export default EvaluateButton