import './Header.css';
import myLogo from './Capital-One-Emblem-Blue.jpg';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={myLogo} width={177.78} height={100} />

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/transactions">Transactions</Link>
                <Link to="/advice">Financial Advice</Link>
                <Link to="/goals">Goals</Link>
            </div>
        </div>
    );
}

export default Header;

// import './Header.css';

// const Header = () => {
//     return (
//         <div className="header">
//             <h1 className="title">My Personal Page</h1>
//             <div className="links">
//                 <a href="/">About Me</a>
//                 <a href="/projects">Projects</a>
//                 <a href="/resume">Resume</a>
//                 <a href="/blog">Blog</a>
//                 <a href="/social-media">Socials</a>
//             </div>
//         </div>
//     );
// }

// export default Header;