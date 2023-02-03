import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import IpDisplay from './components/IpDisplay';
import Latency from './components/Latency';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Sextant" />
                <Exhibit name="Public IPv4 Address">
                    <IpDisplay url='https://api.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name="Public IPv6 Address">
                    <IpDisplay url='https://api64.ipify.org?format=json' />
                </Exhibit>
                <Exhibit name = "Packet Latency">
                    <Latency url = 'ws://localhost:55455'/>
                </Exhibit>
            </div>
        );
    }
}

export default App;
