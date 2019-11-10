import React, { useState, useContext, createContext }  from 'react';
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
import { SidebarMenu } from './components/header/SidebarMenu';
import OutsideAlerter from './components/OutsideAlerter';


const lightTheme = () => ({
    ...themes['common'],
    ...themes['light'],
});

const darkTheme = () => ({
    ...themes['common'],
    ...themes['dark'],
});
const theme = lightTheme();

export const SidebarContext = createContext()

function App() {
    // const {counter} = useSelector(state => state);
    // const {githubReducer} = useSelector(state => state);
    // console.info(counter)
    console.info('-get env: ', process.env);

    // const dispatch = useDispatch();

    // const {githubReducer} = this.props;
    const [isSidebarOpen, setSidebarStatus] = useState(false)
    const toggleSidebar = () => setSidebarStatus(!isSidebarOpen)

    const props = { toggleSidebar, isSidebarOpen, overlay: false }
    return (
        <SidebarContext.Provider value={props}>
            <ThemeProvider theme = {theme}>
                {/*<div>*/}
                <GlobalStyle/>
                    <Header/>
                    <div className="App">
                        {/*<Navigation/>*/}
                        <OutsideAlerter onClickOutside={isSidebarOpen && toggleSidebar}>
                            <SidebarMenu/>
                        </OutsideAlerter>
                
                        <Page>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route path='/contact' component={Contact} />
                                <Route path='/about' component={About} />
                            </Switch>
                        </Page>
                    </div>
                    <Footer/>
                {/*</div>*/}
            </ThemeProvider>
        </SidebarContext.Provider>

    );
}

export default App;

const Page = styled.div`
    flex: 1 1 auto;
    height: 100%;
    padding: 10px;
`