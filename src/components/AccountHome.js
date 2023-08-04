// equivalent to catalog
import {accountData} from '../data/accountData';
import Account from './Account';
import './AccountHome.css'

const AccountHome = () => {
    return (
        <div>
            <h1 className="title">Welcome to Financial Literacy</h1>
            <div className="accounts">
                {accountData.map((account, index) => (
                    <Account type={account.type} balance={account.balance} key={index}/>
                ))}
            </div>
        </div>
    );
}

export default AccountHome;