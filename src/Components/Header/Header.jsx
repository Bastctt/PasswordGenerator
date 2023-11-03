import React from 'react';
import './Header.css';
import GitHubIcon from '../../assets/github.svg'; 

function Header() {
    return (
        <header className="header">
            <ul>
                <li><a href="https://github.com/Bastctt"><img src={GitHubIcon} alt="GitHub Icon" /></a></li>
                <li><a href=""></a></li>
            </ul>
        </header>
    )
}

export default Header;

