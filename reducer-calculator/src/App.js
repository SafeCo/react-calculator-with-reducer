import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';
import {useReducer} from 'react'
import {OperationsContext} from './Contexts/OperationsContext'


export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete',
  EVALUATE: 'evaluate'
}


function reducer (state, {type, payload}) {

  switch(type){
    case ACTIONS.ADD_DIGIT:
      if(payload === "." && state.currentOperation === undefined){
        return{
          ...state,
          currentOperation: "0."
        }
      }else if(payload === "." && state.currentOperation.includes(".")){
        return{
          ...state         
        }
      }else{
        return {
          ...state,
          currentOperation:  `${state.currentOperation || ""}${payload}`
        }
      }
      break;
   
      case ACTIONS.CHOOSE_OPERATION:
      function checkDot (){
        let x = state.currentOperation.indexOf(".")
        return state.currentOperation[x + 1]=== undefined ? 
                state.currentOperation.replace(".", "") : 
                state.currentOperation
        }
      if(!state.currentOperation){
        console.log("working")
        return{
          ...state
        }
      }else{
        return{
          previousOperation: `${state.currentOperation.includes(".") ? checkDot(): state.currentOperation}${payload}`,
          currentOperation: "",
          operator: `${payload}`
        }
      }
      
      break;
    
    case ACTIONS.CLEAR :
      return{
        currentOperation: "",
        previousOperation: "",
        operator: ""
      }
    break;
    case ACTIONS.DELETE_DIGIT :

      if(state.currentOperation === undefined && state.previousOperation === undefined){
        console.log("no numbers")
        return{
          ...state
        }
      }else if(!state.currentOperation && !!state.previousOperation ){
        console.log("working")
        return{
          currentOperation: state.previousOperation.slice(0,-1),
          previousOperation: null,
          operator: null
        }
      }else{
        console.log("fallback")
        return{
          ...state,
          currentOperation: state.currentOperation.slice(0,-1)
        }
      }
    break;

    case ACTIONS.EVALUATE :
      function removeOperator(){
        return parseFloat(state.previousOperation.slice(0, -1))
      }
      
      switch(state.operator){
        case "/":
          return{
            currentOperation: `${removeOperator() / parseFloat(state.currentOperation)}`,
            previousOperation: null,
            operator: null
          }
        break;
        case "+":
          return{
            currentOperation: `${removeOperator() + parseFloat(state.currentOperation)}`,
            previousOperation: null,
            operator: null
          }
        break;
        case "-":
          return{
            currentOperation: `${removeOperator() - parseFloat(state.currentOperation)}`,
            previousOperation: null,
            operator: null
          }
        break;
        case "x":
          return{
            currentOperation: `${removeOperator() * parseFloat(state.currentOperation)}`,
            previousOperation: null,
            operator: null
          }
        break;
        default :
          return{
            ...state
          }
        break;
      }
    
    break;

    default:
      return{
        ...state
      }
    break;
  }
  
}

function App() {
  
  const [{currentOperation, previousOperation, operator}, dispatch] = useReducer(reducer, {})

  return (
    <div className="App">
        <h1 id='title'>Calculator App with reducer and context API</h1>
        <div id='calculator-container'>
          <OperationsContext.Provider value={{dispatch}}>
            <Display currentOperation={currentOperation} previousOperation={previousOperation} />
            <Keypad  />
          </OperationsContext.Provider>
        </div>
    </div>
  );
}

export default App;
