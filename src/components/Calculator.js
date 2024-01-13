import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleValidation = () => {
    if (num1.trim() === '' || num2.trim() === '') {
      setError('Please enter both numbers');
      return false;
    }
    if (!/^-?\d*\.?\d*$/.test(num1) || !/^-?\d*\.?\d*$/.test(num2)) {
      setError('Please enter valid numbers');
      return false;
    }
    setError('');
    return true;
  };

  const handleOperation = (operation) => {
    if (handleValidation()) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      switch (operation) {
        case '+':
          setResult(`Result: ${number1 + number2}`);
          break;
        case '-':
          setResult(`Result: ${number1 - number2}`);
          break;
        case '*':
          setResult(`Result: ${number1 * number2}`);
          break;
        case '/':
          if (number2 !== 0) {
            setResult(`Result: ${number1 / number2}`);
          } else {
            setResult('Result: Undefined (division by zero)');
          }
          break;
        default:
          setResult('');
      }
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter number 1"
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter number 2"
        />
      </div>
      <div>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <p style={{ color: 'green' }}>{result}</p>}
    </div>
  );
};

export default Calculator;
