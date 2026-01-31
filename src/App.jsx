import { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (num) => {
    setCurrentValue(currentValue === "0" ? num : currentValue + num);
  };

  const handleOperationClick = (op) => {
    setOperation(op);
    setPreviousValue(currentValue);
    setCurrentValue('0')
  };

  const handleDecimalClick = () => {
    if (!currentValue.includes(".")) {
      setCurrentValue(currentValue + ".");
    }
  };

  const calculate = () => {
    if (previousValue === null || operation === null) return;
    if (operation === "/" && current === 0) return

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result = 0;

    switch (operation) {
      case "/":
        result = prev / current;
        break;
      case "*":
        result = prev * current;
        break;
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
    }

    setCurrentValue(String(result));
    setPreviousValue(null);
    setOperation(null);
  };

  const handleClear = () => {
    setCurrentValue("0");
  };

  const handleDelete = () => {
    if (currentValue.length === 1) {
      setCurrentValue("0");
    } else setCurrentValue(currentValue.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Calculator</h1>

      <div className="bg-gray-700 rounded-xl shadow-lg w-full max-w-xs p-4">
        {/* Display */}
        <div className="text-sm text-gray-400 text-right px-4">
          {previousValue !== null && operation
            ? `${previousValue} ${operation}`
            : ""}
        </div>

        <div className="bg-gray-900 text-right text-3xl font-bold px-4 py-3 rounded mb-4">
          {currentValue}
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <button
            className="bg-red-500 text-white font-semibold py-3 rounded"
            onClick={handleClear}
          >
            AC
          </button>
          <button
            className="bg-gray-500 text-white font-semibold py-3 rounded"
            onClick={handleDelete}
          >
            DEL
          </button>
          <button
            className="bg-orange-500 text-white font-semibold py-3 rounded"
            onClick={() => handleOperationClick("/")}
          >
            ÷
          </button>
          <button
            className="bg-orange-500 text-white font-semibold py-3 rounded"
            onClick={() => handleOperationClick("*")}
          >
            ×
          </button>

          {/* Row 2 */}
          <button
            className="bg-gray-600 py-3 rounded"
            onClick={() => handleNumberClick("7")}
          >
            7
          </button>
          <button
            className="bg-gray-600 py-3 rounded"
            onClick={() => handleNumberClick("8")}
          >
            8
          </button>
          <button
            className="bg-gray-600 py-3 rounded"
            onClick={() => handleNumberClick("9")}
          >
            9
          </button>
          <button
            className="bg-orange-500 text-white font-semibold py-3 rounded"
            onClick={() => handleOperationClick("+")}
          >
            +
          </button>

          {/* Row 3 */}
          <button
            className="bg-gray-600 py-3 rounded"
            onClick={() => handleNumberClick("4")}
          >
            4
          </button>
          <button
            className="bg-gray-600 py-3 rounded"
            onClick={() => handleNumberClick("5")}
          >
            5
          </button>
          <button
            className="bg-gray-600 py-3 rounded"
            onClick={() => handleNumberClick("6")}
          >
            6
          </button>
          <button
            className="bg-orange-500 text-white font-semibold py-3 rounded"
            onClick={() => handleOperationClick("-")}
          >
            −
          </button>

          {/* Row 4 */}
          <button
            className="bg-gray-600 py-3 rounded"
            onClick={() => handleNumberClick("1")}
          >
            1
          </button>
          <button
            className="bg-gray-600 py-3 rounded"
            onClick={() => handleNumberClick("2")}
          >
            2
          </button>
          <button
            className="bg-gray-600 py-3 rounded"
            onClick={() => handleNumberClick("3")}
          >
            3
          </button>
          <button
            className="bg-green-500 text-white font-semibold py-3 rounded"
            onClick={calculate}
          >
            =
          </button>

          {/* Row 5 */}
          <button
            className="col-span-2 bg-gray-600 py-3 rounded"
            onClick={() => handleNumberClick("0")}
          >
            0
          </button>
          <button
            className="bg-gray-600 py-3 rounded"
            onClick={handleDecimalClick}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
