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

  console.log(type)
  console.log(payload)

  switch(type){
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperation: `${state.currentOperation || ""}${payload}`
      }

  }
  
}

function App() {
  
 

  const [{currentOperation, previousOperation, operation}, dispatch] = useReducer(reducer, {})



  return (
    <div className="App">
        <div id='calculator-container'>
          <OperationsContext.Provider value={{dispatch}}>
            <Display currentOperation={currentOperation} />
            <Keypad  />
          </OperationsContext.Provider>
        </div>
    </div>
  );
}

export default App;
