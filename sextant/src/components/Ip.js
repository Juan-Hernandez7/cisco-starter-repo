import React, {Component} from 'react';

class Ip extends Component{

    constructor() {
        super();
        this.state = {ip: ""};
    }

    render(){
        let url;

        if(this.props.ipType === "IPV4"){
            url = 'https://api.ipify.org?format=json	';
        }
        else{
            url = 'https://api64.ipify.org?format=json	';
        }

        fetch(url)
        .then((response) => response.json(),[])
         .then((data) => {
             this.setState({ip:data.ip});
             },[]);

        return (
            <div className="IpInfo">
                <h3>{ this.props.ipType }: {this.state.ip}</h3>

            </div>
        );
    }
}

export default Ip;