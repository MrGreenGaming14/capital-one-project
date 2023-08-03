import './Header.css';
import myLogo from './Capital-One-Emblem-Blue.jpg';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img src={myLogo} width={177.78} height={100} />
            Welcome, Stanley.
            <div className="links">

                <a href="/">Home</a>
                <a href="/1">1</a>
                <a href="/2">2</a>
                <a href="/3">3</a>
                <a href="/4">4</a>
                <a href="/5">5</a>
                <a href="/6">6</a>
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