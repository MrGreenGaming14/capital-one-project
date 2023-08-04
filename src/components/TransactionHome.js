// equivalent to catalog
import {transactionData} from '../data/transactionData';
import Transaction from './Transaction';
import './TransactionHome.css'

const TransactionHome = () => {
    return (
        <div>
            <h1 className="title">Transactions</h1>
            <h3>Checking Balance: $3,000.01</h3>
            <h3>Savings Balance: $1,146.03</h3>
            <h3>Credit Card Balance: -$123.45</h3>
            
            <div className="transactions">
                {transactionData.map((transaction, index) => (
                    <Transaction type={transaction.type} balance={transaction.balance} date={transaction.date} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default TransactionHome;