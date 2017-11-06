import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './App.css';


class App extends Component {
    navigateTo (route) {
        this.props.history.push(route);
    }

    render () {
        return (
            <div>
                <ul id="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/stuff">Stuff</Link></li>
                    <li><Link to="/things">Things</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
                <div id="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default withRouter(App);
