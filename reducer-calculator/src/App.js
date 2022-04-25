import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';

function App() {
  return (
    <div className="App">
        <div id='calculator-container'>
          <Display />
          <Keypad />
        </div>
    </div>
  );
}

export default App;
