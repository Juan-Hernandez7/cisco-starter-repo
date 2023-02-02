import React, {Component} from 'react';

class IpDisplay extends Component{

    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            ip: null
        };
    }

    componentDidMount() {
            fetch(this.state.url)
            .then(response => response.json())
            .then(data => {
                this.setState({ ip: data.ip })
                });
    }

    render(){

        return (
            <div className="IpInfo">
                <h3>{this.state.ip}</h3>

            </div>
        );
    }
}

export default IpDisplay;