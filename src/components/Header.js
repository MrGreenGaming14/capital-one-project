import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="title">My Personal Page</h1>
            <div className="links">
                <a href="/">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
                <a href="/blog">Blog</a>
                <a href="/social-media">Socials</a>
            </div>
        </div>
    );
}

export default Header;