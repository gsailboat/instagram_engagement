import React, { Component } from 'react';
import axios from 'axios';

// let retry = function() {
//     let i = 0;

//     return function(max, timeout) {

//     }
// }

class EngagerOutput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            info: []
        }
    }

    getCall(url) {
        setTimeout(() => {
            axios.get(url)
            .then(res => {
                if (res.status === 200)
                    this.setState({
                        info: JSON.stringify(res)
                    })
            })
            .catch(error => {
                console.log(error)
            })
        }, 1000)
    };

    componentDidMount() {
        const url = 'https://fe-test-zyper-engagement.herokuapp.com/results/' + this.props.response;

        this.getCall(url);
        }

    render() {
        // console.log(this.state.info)
        return (
            <div>{this.state.info}</div>
        )
    }
}

export default EngagerOutput;