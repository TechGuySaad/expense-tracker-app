import '../styles/transaction.css'
import TransactionCard from './TransactionCard'
export default function Transaction(props){

    return <div className="transactions">

        <h3>Transactions</h3>
        <input type="text" placeholder='Search....'/>
        <TransactionCard></TransactionCard>
        <TransactionCard></TransactionCard>



         
    </div>
    
}
