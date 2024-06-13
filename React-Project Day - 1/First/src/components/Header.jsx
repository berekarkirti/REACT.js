import React from 'react';

// ---------------- style ---------------- //
const header = {
    backgroundColor: '#387490',
    padding: '15px 0',

};

const navList = {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'left',
    display: 'flex',

};

const navItem = {
    display: 'inline-block',
    margin: '0 10px',
    marginLeft: '65px',
};

const navLink = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '20px',
};


const navItem2 = {
    display: 'inline-block',
    margin: '0 10px',
    marginLeft: '40%',
    color: '#ffff',
    fontSize: '20px',
};

// ---------------- code ---------------- //
const Header = () => {
    return (
        <header style={header}>
            <nav>
                <ul style={navList}>
                    <li style={navItem}><a href="#" style={navLink}>Home</a></li>
                    <li style={navItem}><a href="#" style={navLink}>About</a></li>
                    <li style={navItem}><a href="#" style={navLink}>Services</a></li>
                    <li style={navItem}><a href="#" style={navLink}>Contact</a></li>
                    <li style={navItem}><a href="#" style={navLink}>Blog</a></li>
                    <li style={navItem2}><a style={{ textDecoration: 'none', color: '#fff' }} href="https://www.google.com/search?q=who+is+jordan+walke%3F&oq=who+is+jordan+walke%3F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTYyNzlqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8"><i className="ri-facebook-fill"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                         <a style={{ textDecoration: 'none', color: '#fff' }} href="https://www.google.com/search?q=what+is+react+%3F&sca_esv=eb97b625d6b0f606&sca_upv=1&sxsrf=ADLYWIIOG9rKam4Ln8b34mbsMoxpYOjtIg%3A1718300149741&ei=9S1rZsH2LPfAvr0Pt7eJkQ0&oq=what+is+react&gs_lp=Egxnd3Mtd2l6LXNlcnAiDXdoYXQgaXMgcmVhY3QqAggAMgQQIxgnMhEQABiABBiRAhixAxiDARiKBTIOEAAYgAQYkQIYsQMYigUyBRAAGIAEMgsQABiABBiRAhiKBTIFEAAYgAQyBRAAGIAEMggQABiABBixAzIFEAAYgAQyBRAAGIAESMNJUOYGWIkncAJ4AZABBZgBjgygAdZGqgEJNS02LjAuMy4xuAEByAEA-AEBmAIHoALaKqgCFMICBxAjGLADGCfCAgoQABiwAxjWBBhHwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhQQABiABBjjBBi0AhjpBBjqAtgBAcICFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQLCAgoQIxiABBgnGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIQEAAYgAQYsQMYQxiDARiKBcICBBAAGAOYAwaIBgGQBgm6BgYIARABGAG6BgYIAhABGAuSBwkyLjUtMi4wLjOgB4pS&sclient=gws-wiz-serp"><i className="ri-twitter-fill"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                         <a style={{ textDecoration: 'none', color: '#fff' }} href=""><i class="ri-instagram-line"></i></a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
