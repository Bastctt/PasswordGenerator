import React from 'react';
import './Header.css';
import GitHubIcon from '../../assets/github.svg'; 
import LinkedinIcon from '../../assets/linkedin.svg';

function Header() {
    return (
        <header className="header">
            <ul>
                <li><a href="https://github.com/Bastctt"><img src={GitHubIcon} alt="GitHub Icon" /></a></li>
                <li><a href="https://www.linkedin.com/in/bastiencochet/"><img src={LinkedinIcon} alt="LinkedIn Icon" /></a></li>
            </ul>
        </header>
    )
}

export default Header;

