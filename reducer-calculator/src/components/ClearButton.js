import React, {useContext} from 'react'
import { OperationsContext } from '../Contexts/OperationsContext'
import { ACTIONS } from '../App'

const ClearButton = ({symbol}) => {
    const {dispatch} = useContext(OperationsContext)
  return (
    <button  onClick={()=>{dispatch({ type: ACTIONS.CLEAR, payload: symbol })}}>{symbol}</button>
  )
}

export default ClearButton