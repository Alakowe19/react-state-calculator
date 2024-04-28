import { useState } from 'react'
import "./App.css"

function App() {

  const [display, setDisplay] = useState('0') //Diplays value
  const [firstOperand, setFirstOperand] = useState('') // first Button
  const [secondOperand,  setSecondOperand]  = useState('') //Second Button
  const [operator, setOperator] = useState('') //Operator
  const [result, setResult] = useState('') // Result of Calculation

  //button session
  const handleNumberClick = (num) => {
    if (operator) {
      setSecondOperand(secondOperand + num) //ask Lewis 
      setDisplay(secondOperand + num)
    } else {
      setFirstOperand(firstOperand + num)
      setDisplay(firstOperand + num)
    }
  }

  //operator session
  const handleOperatorClick = (op) => {
    if (operator && secondOperand || firstOperand) {
      calculateResult()
    }
    setOperator(op)
    setDisplay(op)
  }

  //clear
  const handleClear = () => {
    setDisplay('0')
    setFirstOperand('')
    setSecondOperand('')
    setOperator('')
    setResult('')
  }

  const calculateResult = () => {
    try {
      const calculate = firstOperand + operator + secondOperand
      const calculateNow = eval(calculate)
      setResult(calculateNow.toString())
      setFirstOperand(calculateNow.toString())
      setSecondOperand('')
      setOperator('')
      setDisplay(calculateNow.toString())
    } catch (error) {
      console.log('error evaluating calculate', error)
    }
  }

  const handleEqualClick = () => {
    if (firstOperand && secondOperand && operator){
      calculateResult()
    }
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{display || 0}</p>
        <div className="numbers">
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button onClick={() => handleClear()}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => handleOperatorClick('+')}>+</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
          <button onClick={() => handleOperatorClick('/')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{firstOperand}</p>
        <div className="numbers">
        <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button onClick={() => handleClear()}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result || 0}</p>
        <div>
          <button onClick={() => handleEqualClick()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App