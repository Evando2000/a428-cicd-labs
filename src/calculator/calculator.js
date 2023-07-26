import { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("add");

  function handleEmpty(num){
    if (num === ''){
        return 0
    }
    return num
  }

  const handleChangeNum1 = (e) => {
    const num = handleEmpty(e.target.value)
    setNum1(num);
    calculate(num, num2, operator);
  }

  const handleChangeNum2 = (e) => {
    const num = handleEmpty(e.target.value)
    setNum2(num);
    calculate(num1, num, operator);
  }

  const handleChangeOpt = (e) => {
    const opt = handleEmpty(e.target.value)
    setOperator(opt);
    calculate(num1, num2, opt);
  }

  function calculate(num1, num2, opt){
    switch (opt) {
        case "add":
            setResult(parseInt(num1) + parseInt(num2))
            break

        case "subs":
            setResult(parseInt(num1) - parseInt(num2))
            break

        case "mul":
            setResult(parseInt(num1) * parseInt(num2))
            break

        case "div":
            setResult(parseInt(num1) / parseInt(num2))
            break
        default:
            setResult(parseInt(num1) + parseInt(num2))
            break;
    }
  }

  return (
    <>
      <h1>Mini Calculator</h1>
      <label>
            Number 1
            <input style={{marginLeft:'10px'}} type="number" onChange={handleChangeNum1} />
      </label>
      <p></p>
      <label for="operators">Operator: </label>
        <select id="operators" name="operators" onChange={handleChangeOpt}>
        <option value="add">+</option>
        <option value="subs">-</option>
        <option value="mul">x</option>
        <option value="div">/</option>
        </select>
      <p></p>
      <label>
            Number 2
            <input style={{marginLeft:'10px'}} type="number" onChange={handleChangeNum2} />
      </label>
      <h1>Result = {result}</h1>
    </>
  )
}