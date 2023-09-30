import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-content">
                    <img src="/Components/header/imageHeader.jpeg" alt="Your Name" className="header-image" />
                    <h1 className="header-title">Welcome to Our Page Generation Site Using ReactJS </h1>
                    <p className="header-subtitle">Discover the beauty of ReactJS</p>
                </div>
            </div>
        );
    }
}

export default Header;
