import '../styles/transaction.css'
import TransactionCard from './TransactionCard'
export default function Transaction({entry}){

    return <div className="transactions">

        <h3>Transactions</h3>
        <input type="text" placeholder='Search....'/>
        <TransactionCard entry={entry}></TransactionCard>
        



         
    </div>
    
}
