import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="container-fluid">
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand text-white text-left mr-auto" href="/"><h3>Around Town</h3></a>
                      <ul className="nav justify-content-end text-right ml-auto">
                        <li className="nav-item">
                          <a className="nav-link text-white" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link text-white" href="/signup">Sign Up</a>
                        </li>
                      </ul>
                </nav>
      </div>
    );
  }
}

export default Nav;
