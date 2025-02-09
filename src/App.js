import React from 'react';
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
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


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
            {/*<div>*/}
            <GlobalStyle/>
                <Header/>
                <div className="App">
                    {/*<Navigation/>*/}

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                    </Switch>
                    
                </div>
                <Footer/>
            {/*</div>*/}

        </ThemeProvider>

    );
}

export default App;
