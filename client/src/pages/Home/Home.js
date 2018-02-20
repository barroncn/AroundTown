import React, { Component } from "react";
import "./Home.css";
import Nav from "../../components/Nav";

class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <br />
                <br />
                <div className="container">
                    <div className="input-group">
                          <input type="text" className="form-control searchbar" placeholder="Enter a city to find events and activities nearby..." />
                          <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Go!</button>
                          </span>
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
