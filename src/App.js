import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle';
import { themes } from './utils/themes'
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Brand from './components/header/Brand';
import Header from "./components/header/Header";

const lightTheme = () => ({
    ...themes['common'],
    ...themes['light'],
});

const darkTheme = () => ({
    ...themes['common'],
    ...themes['dark'],
});
const theme = lightTheme();

function App() {
    // const {counter} = useSelector(state => state);
    // const {githubReducer} = useSelector(state => state);
    // console.info(counter)
    console.info('-get env: ', process.env);

    // const dispatch = useDispatch();

    // const {githubReducer} = this.props;



    return (
        <ThemeProvider theme = {theme}>
            <div className="App">
                <Navigation/>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} />
                </Switch>
                <GlobalStyle/>
            </div>
        </ThemeProvider>

    );
}

export default App;
