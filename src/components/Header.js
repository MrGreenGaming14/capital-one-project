import './Header.css';
import myLogo from './Capital-One-Emblem-Blue.jpg';
import profile from './user_profile_white.png';
import {Link} from 'react-router-dom';
import { Line, Circle } from 'rc-progress';
import GoalInput from './Goals';
import { whatToSave } from './Goals';



const Header = () => {
    return (
        <div className="header">
            <img src={myLogo} width={133.33} height={75} />

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/transactions">Transactions</Link>
                <Link to="/advice">Financial Advice</Link>
                <Link to="/goals">Goals</Link>
                <a>Progress to Goal:</a><Line percent={whatToSave} strokeWidth={10} strokeColor="#D3D3D3"/>
            </div>
            <img src={profile} width={25} height={25} />
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