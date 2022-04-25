import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';
import {useReducer} from 'react'
import {OperationsContext} from './Contexts/OperationsContext'





function reducer (state, action) {
  console.log("working")
  
}

function App() {
  
  const operation = {
    currentOperation: "",
    previousOperation:""
  }


  const [state, dispatch] = useReducer(reducer, operation)



  return (
    <div className="App">
        <div id='calculator-container'>
          <OperationsContext.Provider value={{dispatch}}>
            <Display />
            <Keypad />
          </OperationsContext.Provider>
        </div>
    </div>
  );
}

export default App;
