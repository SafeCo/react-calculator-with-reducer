import React, {useContext} from 'react'
import { OperationsContext } from '../Contexts/OperationsContext'
import { ACTIONS } from '../App'

const OperationButton = ({symbol}) => {
    const {dispatch} = useContext(OperationsContext)
  return (
    <button  onClick={()=>{dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: symbol })}}>{symbol}</button>
  )
}

export default OperationButton