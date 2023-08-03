import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="title">My Personal Page</h1>
            <div className="links">
                <a href="/">About Mes</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resumes</a>
                <a href="/blog">Blogs</a>
                <a href="/social-media">Socials</a>
            </div>
        </div>
    );
}

export default Header;