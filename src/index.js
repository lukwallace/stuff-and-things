import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Home = () => (
    <div id="home" className="page">
        <h1>Home</h1>
    </div>
);

const About = () => (
    <div id="about" className="page">
        <h1>About</h1>
    </div>
);

const Stuff = () => (
    <div id="stuff" className="page">
        <h1>Stuff</h1>
    </div>
);

const Things = () => (
    <div id="things" className="page">
        <h1>Things</h1>
    </div>
);

const Topics = () => (
    <div id="topics" className="page">
        <h1>Topics</h1>
    </div>
);

const attachRoutes = (Component) => (
    <Router>
        <Component>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/things" component={Things}/>
                <Route path="/topics" component={Topics}/>
            </Switch>
        </Component>
    </Router>
);


ReactDOM.render(attachRoutes(App), document.getElementById('root'));
registerServiceWorker();
