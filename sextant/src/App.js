import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Exhibit A"></Exhibit>
                <Exhibit name="Exhibit B"></Exhibit>
            </div>
        );
    }
}

export default App;
