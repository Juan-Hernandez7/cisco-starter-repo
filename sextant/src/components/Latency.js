import React, {Component} from 'react';

class Latency extends Component{
    ws = new WebSocket(this.props.url);

    constructor(props){
        super(props);
        this.state = {
            delay: null
        };    
    }

    componentDidMount(){

        this.ws.onopen = () => {
            console.log("open");
        }

        this.ws.onclose = () => {
            console.log("close");
        }

        this.ws.onmessage = (event) => {
            let time = Date.now() - event.data;
            this.setState({delay:time});
        }
    }

    render(){
        return(
            <div className="LatencyCheck">
            <h3> {this.state.delay} ms</h3>

            </div>
        );
    }
}

export default Latency;