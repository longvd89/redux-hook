import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    // const {counter} = useSelector(state => state);
    // const {githubReducer} = useSelector(state => state);
    // console.info(counter)
    console.info('-get env: ', process.env);

    // const dispatch = useDispatch();

    // const {githubReducer} = this.props;



    return (
        <div className="App">
            <Navigation/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
            </Switch>

        </div>
    );
}

export default App;
