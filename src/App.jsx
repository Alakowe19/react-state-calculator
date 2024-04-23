import { useState} from 'react'
import "./App.css"

function App() {
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  const ops = ['+', '-' , '*', '/' ]

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes (calc.slice(-1))
    ) 
    {
      return
    }
    setCalc(calc + value)

    if (!ops.includes(value)) {
    setResult(eval(calc + value).toString())
    }
  }

  const handleClear = () => {
    setCalc('')
    setResult ('')
  }

  const handleEqual = () => {
    setCalc(eval(calc).toString())
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{ result || 0 }</p>
        <div className="numbers">
          <button onClick={() => updateCalc('1')}>1</button>
          <button onClick={() => updateCalc('2')}>2</button>
          <button onClick={() => updateCalc('3')}>3</button>
          <button onClick={() => updateCalc('4')}>4</button>
          <button onClick={() => updateCalc('5')}>5</button>
          <button onClick={() => updateCalc('6')}> 6</button>
          <button onClick={() => updateCalc('7')}>7</button>
          <button onClick={() => updateCalc('8')}>8</button>
          <button onClick={() => updateCalc('9')}>9</button>
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>+</p>
        <div className="numbers">
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('/')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>0</p>
        <div className="numbers">
          <button onClick={() => updateCalc('')}>1</button>
          <button onClick={() => updateCalc('2')}>2</button>
          <button onClick={() => updateCalc('3')}>3</button>
          <button onClick={() => updateCalc('4')}>4</button>
          <button onClick={() => updateCalc('5')}>5</button>
          <button onClick={() => updateCalc('6')}>6</button>
          <button onClick={() => updateCalc('7')}>7</button>
          <button onClick={() => updateCalc('8')}>8</button>
          <button onClick={() => updateCalc('9')}>9</button>
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>0</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
