import './App.css';
import logoHenry1 from './images/logoHenry1.jpg';
import Button from './components/Button';
import Display from './components/Display';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  function addImput(val) {
    setInput(input + val);
  };

  function resultCalc() {
    setInput(evaluate(input));
  };
  
  return (
    <div className='App'>
      <div className='container-logo'>
        <img className='image'
          src={logoHenry1}
          alt='Logo' />
      </div>
      <div className='calculator-container' >
        <Display input={input} />
        <div className='fila'>
          <Button clickManage={addImput}>1</Button>
          <Button clickManage={addImput}>2</Button>
          <Button clickManage={addImput}>3</Button>
          <Button clickManage={addImput}>+</Button>
        </div>
        <div className='fila'>
          <Button clickManage={addImput}>4</Button>
          <Button clickManage={addImput}>5</Button>
          <Button clickManage={addImput}>6</Button>
          <Button clickManage={addImput}>-</Button>
        </div>
        <div className='fila'>
          <Button clickManage={addImput}>7</Button>
          <Button clickManage={addImput}>8</Button>
          <Button clickManage={addImput}>9</Button>
          <Button clickManage={addImput}>*</Button>
        </div>
        <div className='fila'>
          <Button clickManage={resultCalc}>=</Button>
          <Button clickManage={addImput}>0</Button>
          <Button clickManage={addImput}>.</Button>
          <Button clickManage={addImput}>/</Button>
        </div>
        <div className='fila'>
          <ClearButton clickManage={() => setInput('')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
