import React, {Component} from 'react';
import GithubData from './GithubData';
import CardItem from './partial/CardItem';
import image from '../assets/photo.jpeg'
function About() {
    return (
        <React.Fragment>
            <h2>About test page</h2>
            <GithubData/>
            <CardItem image={image} title ='Hello Card'/>
        </React.Fragment>

    );

}

export default About;