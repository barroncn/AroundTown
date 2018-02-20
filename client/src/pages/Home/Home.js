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
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6">
                            <div className="input-group d-inline-flex p-3">
                                  <input type="text" className="form-control" placeholder="Enter a city..." />
                                  <span className="input-group-btn">
                                    <button className="btn btn-secondary" type="button">Go!</button>
                                  </span>
                               
                            </div>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
