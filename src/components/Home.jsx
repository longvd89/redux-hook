import React, { Component } from 'react';
import Test from './Test'
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>Home page</h2>
                <Test/>
            </React.Fragment>
        );
    }
}

export default Home;