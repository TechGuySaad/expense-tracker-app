import Overview from "./components/Overview";
import Transaction from "./components/Transaction";
import { useState, useEffect } from "react";
import "./index.css";

function App() {
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
    if (radio === "expense") setExpense(expense + money);
    if (radio === "income") setIncome(income + money);
    // setBalance((income - expense))

    setEntry([...entry, obj]);

    setClick(!isClicked);
    // console.log(entry)
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      <Overview money={money} setMoney={setMoney} type={type} setType={setType} radio={radio} setRadio={setRadio} entry={entry} setEntry={setEntry} expense={expense} setExpense={setExpense} income={income} setIncome={setIncome} balance={balance} setBalance={setBalance} handleClick={handleClick} handleSubmission={handleSubmission} isClicked={isClicked} setClick={setClick}></Overview>

      <Transaction entry={entry}></Transaction>
    </div>
  );
}

export default App;
