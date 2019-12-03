import React, { Component } from 'react';
import { Card } from 'antd';
import axios from 'axios';
import '../App.css'

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
                console.log(url);
                if (res.status === 200)
                    this.setState({
                        info: JSON.stringify(res.data)
                    })
            })
            .catch(error => {
                console.log(error)
            })
        }, 2000)
    };

    componentDidMount() {
        const url = 'https://fe-test-zyper-engagement.herokuapp.com/results/' + this.props.response;

        this.getCall(url);
        }

    render() {
        // console.log(this.state.info)
        return (
            <Card title="User Info" className="ConsistentWidth">
                <div>{this.state.info}</div>
            </Card>
        )
    }
}

export default EngagerOutput;