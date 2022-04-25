import React, {useContext} from 'react'
import { OperationsContext } from '../Contexts/OperationsContext'



const Button = ({type, symbol}) => {
  const {dispatch} = useContext(OperationsContext)
  return (
    <button onClick={()=>{dispatch()}} >{symbol}</button>
  )
}

export default Button