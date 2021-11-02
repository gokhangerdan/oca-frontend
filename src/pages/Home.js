import React, { Component } from "react";

import Navigation from '../components/Navigation.js';
import Hero from '../components/Hero.js';


class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Hero />
            </div>
        );
    }
}

export default Home;