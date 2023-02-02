import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Ip from './components/Ip';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Ip Information">
                <Ip ipType = "IPV4"/>
                <Ip ipType = "IPV6"/>
                </Exhibit>
                <Exhibit name="Exhibit B"></Exhibit>
            </div>
        );
    }
}

export default App;
