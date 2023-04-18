import { useEffect, useState } from "react";
import "../styles/overview.css";

export default function Overview() {
  const [isClicked, setClick] = useState(false);
  let [money, setMoney] = useState(0);
  let [type, setType] = useState("");
  let [radio, setRadio] = useState("");
  let [entry, setEntry] = useState([]);
  let [expense, setExpense] = useState(0);
  let [income, setIncome] = useState(0);
  let [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(income - expense);
  }, [income, expense]);
  
  function handleClick() {
    setClick(!isClicked);
  }
  function handleSubmission() {
    let obj = {};
    obj.type = type;
    obj.money = money;
    obj.radio = radio;
    if(radio === 'expense') setExpense(expense + money);
    if (radio === 'income') setIncome(income + money);
    // setBalance((income - expense))

    

   

    setEntry([...entry, obj]);



    setClick(!isClicked);
    // console.log(entry)
  }
  return (
    <div className="overview">
      <div className="add-transaction">
        <p>Balance: ${balance}</p>
        <button onClick={handleClick}>{isClicked ? "Cancel" : "Add"}</button>
      </div>
      {isClicked && (
        <div className="transaction-form">
          <input
            type="number"
            placeholder="Enter Money of Transaction..."
            onChange={(e) => {
              setMoney(Number(e.target.value));
            }}
          />
          <input
            type="text"
            placeholder="Enter Type of Transaction..."
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          <div className="radio">
            <input
              type="radio"
              name="radio"
              value="expense"
              onChange={(e) => {
                setRadio(e.target.value);
              }}
            />
            Expense
            <input
              type="radio"
              name="radio"
              value="income"
              onChange={(e) => {
                setRadio(e.target.value);
              }}
            />
            Income
          </div>
          <div className="submit">
            <button onClick={handleSubmission}>Add Transaction</button>
          </div>
        </div>
      )}

      <div className="total-expense">
        <h2>Expense</h2>
        <p>${expense}</p>
      </div>
      <div className="total-income">
        <h2>Income</h2>
        <p>${income}</p>
      </div>
    </div>
  );
}
