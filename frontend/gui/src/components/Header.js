import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                
                <NavLink exact to="/" className="item" activeClassname = "active">홈</NavLink>
                <ul>
                    <li>
                    <NavLink to="/selectboard" className="item" activeClassname = "active">게시판</NavLink>
                    </li>
                    <li>
                    <NavLink to="/write" className="item" activeClassname = "active">글 작성</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;