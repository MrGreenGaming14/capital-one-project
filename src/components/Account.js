import './Account.css'
// equivalent to movie
const Account = ({type, balance}) => {
    return (
        <div className="account">
            <p className="accountType">{type}</p>
            <p className="accountBalance">{balance}</p>
            <h4> Current Balance </h4>
        </div>
    );
}

export default Account;