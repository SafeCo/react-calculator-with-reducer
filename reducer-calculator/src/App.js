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
      return{
        ...state,
        previousOperation: `${state.currentOperation.includes(".") ? checkDot(): state.currentOperation}${payload}`,
        currentOperation: "",
        operation: `${payload}`
      }
      break;
    
    case ACTIONS.CLEAR :
      return{
        currentOperation: "",
        previousOperation: "",
        operation: ""
      }

  }
  
}

function App() {
  
  const [{currentOperation, previousOperation, operation}, dispatch] = useReducer(reducer, {})

  return (
    <div className="App">
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
