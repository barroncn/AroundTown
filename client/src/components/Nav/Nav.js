import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <a className="nav-link" href="#">Around Town</a>
                <ul className="nav justify-content-end mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                  </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
