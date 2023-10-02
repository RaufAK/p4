import React from 'react';
import './Header.css';

/**
 * Define Header, a React component of Project 4, Problem 3.
 */
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container Header">
                <div className="header">Web Applications</div>
                <div className="gradient"></div>
                <img src="/Components/header/imageHeader.jpeg" alt="Your Name" className="header-image" />
                <h1 className="header-title">Welcome to Our Page Generation Site Using ReactJS </h1>
                <p className="header-subtitle">Discover the beauty of ReactJS</p>
            </div>
        );
    }
}

export default Header;
