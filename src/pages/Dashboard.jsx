import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const operations = ["+", "*", "**", "-", "/", "log", "ln"];
  const [active, setActive] = useState(false);
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operation, setOperation] = useState("");
  const [text, setText] = useState("");

  const handleOperand1 = (event) => {
    setOperand1(event.target.value);
  };

  const handleOperand2 = (event) => {
    setOperand2(event.target.value);
  };

  const handleOperation = (value) => {
    setOperation(value);
  };

  //integrate with the backend
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // await axios
    //   .post("/calculate", {
    //     operand1: parseInt(operand1),
    //     operand2: parseInt(operand2),
    //     operation: operation,
    //   })
    //   .then((response) => {
    //     setText(`${text} = ${response?.Response}`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    setText(`${operand1} ${operation} ${operand2}`);
  }, [operand1, operand2, operation]);

  return (
    <div className="container shadow p-8">
      <div className="text-xl text-center m-3">Simple Online calculator</div>
      <p style ={{color: 'darkgrey'}}> Choose operation:</p>
      <div className="flex flex-wrap">
        {operations.map((operation, idx) => (
          <div className="m-2">
            <button
              key={idx}
              isActive={active}
              style={{
                backgroundColor: "#45D1DA",
                padding: "3px",
                width: "60px",
              }}
              className="text-white text-center p-2 rounded hover:drop-shadow-xl"
              onClick={() => handleOperation(operation)}>
              {operation}
            </button>
          </div>
        ))}
      </div>
      <form action="#" onSubmit={handleSubmit} className="w-full p-2 ">
        <div className="flex mt-2 mr-2 mb-3 space-x-4">
          <input
            className="border-1 border-gray-200 rounded outline-none p-2"
            type="text"
            placeholder="Enter first number"
            value={operand1}
            onChange={handleOperand1}
          />
          <input
            className="border-1 border-gray-200 rounded outline-none p-2"
            type="text"
            placeholder="Enter second number"
            value={operand2}
            onChange={handleOperand2}
          />
        </div>
        <div className="p-3 bg-green-100">
          <p>{text}</p>
        </div>
        <div className="bg-blue-500 text-center text-white rounded mt-5 mb-3 w-1/3">
          <button
            className="p-2 text-center outline-none"
            type="submit"
            onClick={() => handleSubmit()}>
            calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
