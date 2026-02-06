import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function Calculator() {
  const [numA, setNumA] = useState("")
  const [numB, setNumB] = useState("")
  const [operation, setOperation] = useState("+")
  const [result, setResult] = useState(0)

  const handleCalculate = () => {
    const a = Number(numA)
    const b = Number(numB)

    if (isNaN(a) || isNaN(b)) {
      setResult(0)
      return
    }

    let calculatedResult

    switch (operation) {
      case '-':
        calculatedResult = a - b
        break
      case '*':
        calculatedResult = a * b
        break
      case '%':
        calculatedResult = a % b
        break
      case '+':
      default:
        calculatedResult = a + b
    }

    setResult(calculatedResult)
  }

  const handleClear = () => {
    setNumA("")
    setNumB("")
    setOperation("+")
    setResult(0)
  }

  return (

    <div className="app-wrapper">
  <h1 className="app-title">Ash’s Calculator</h1>
    <div className="calculator">

      <input
        type="number"
        placeholder="Number A"
        value={numA}
        onChange={(e) => setNumA(e.target.value)}
      />

      <input
        type="number"
        placeholder="Number B"
        value={numB}
        onChange={(e) => setNumB(e.target.value)}
      />

      {/* Operators */}
      <div>
        <button className="operator-btn" onClick={() => setOperation('+')}>+</button>
        <button className="operator-btn" onClick={() => setOperation('-')}>-</button>
        <button className="operator-btn" onClick={() => setOperation('*')}>*</button>
        <button className="operator-btn" onClick={() => setOperation('%')}>%</button>
      </div>

      {/* Calculate */}
      <button className="calculate-btn" onClick={handleCalculate}>
        Calculate
      </button>

      {/* Result */}
      <div className="result-display">
        {result}
      </div>

      {/* Clear */}
      <button className="clear-btn" onClick={handleClear}>
        Clear
      </button>

    </div>
    </div>
    
  )
}

export default Calculator
