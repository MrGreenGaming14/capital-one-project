import './Header.css';
import myLogo from './Capital-One-Emblem-Blue.jpg';
import profile from './user_profile_white.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={myLogo} width={133.33} height={75} />

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/transactions">Transactions</Link>
                <Link to="/advice">Financial Advice</Link>
                <Link to="/goals">Goals</Link>
            </div>
            <img src={profile} width={25} height={25} />
        </div>
    );
}

export default Header;