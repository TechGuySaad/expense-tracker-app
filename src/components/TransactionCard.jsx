import '../styles/transaction.css'

export default function TransactionCard({entry}){
    const expenseColor = {
        borderRightColor: 'red'
    }

    const incomeColor = {
        borderRightColor: 'green'
    }
    // console.log(entry)
    
    
    return <>

    {
        entry.map((item,index) => {
            if(item.radio === 'expense'){
                return <div className='transaction-card' key={index} style={expenseColor} >
            <p>{item.type}</p>
            <p>${item.money}</p>
            </div>
            }else{
                return <div className='transaction-card' key={index} style={incomeColor} >
            <p>{item.type}</p>
            <p>${item.money}</p>
            </div>
            }
            
           

    })

    }

        

    </>
}