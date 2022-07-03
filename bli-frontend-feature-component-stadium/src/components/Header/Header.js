import React, { Component } from 'react';
import './Header.scss';
import {
    NavLink
} from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <input id="nav-toggle" type="checkbox" />
                    <div className="logo"><strong>BANH LỊA</strong></div>
                    <ul className="links">
                        <li><NavLink to="/" activeClassName="active" exact={true}>Home</NavLink></li>
                        <li><NavLink to="/team" activeClassName="active">Team</NavLink></li>
                        <li><NavLink to="/stadium" activeClassName="active">Stadium</NavLink></li>
                        <li><NavLink to="/results" activeClassName="active">Results</NavLink></li>
                        <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
                    </ul>
                    <label for="nav-toggle" className="icon-burger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </label>
                </nav>

            </div>
        );
    }
}

export default Header;