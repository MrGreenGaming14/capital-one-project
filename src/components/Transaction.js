import './Transaction.css'
// equivalent to movie
const Transaction = ({type, balance, date}) => {
    return (
        <div className="transaction">
            <p className="transactionType">{type}</p>
            <p className="transactionBalance">{balance}</p>
            <p className="transactionDate">{date}</p>
        </div>
    );
}

export default Transaction;