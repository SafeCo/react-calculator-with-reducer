import React, {useContext} from 'react'
import { OperationsContext } from '../Contexts/OperationsContext'
import { ACTIONS } from '../App'

const DeleteButton = ({symbol}) => {
    const {dispatch} = useContext(OperationsContext)
  return (
    <button  onClick={()=>{dispatch({ type: ACTIONS.DELETE_DIGIT, payload: symbol })}}>{symbol}</button>
  )
}

export default DeleteButton