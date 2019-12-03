import React, { Component } from 'react';
import { Button, Checkbox, Input, Alert } from 'antd';
import EngagerOutput from './EngagerOutput';
import axios from 'axios';
import '../App.css'

const { TextArea } = Input;

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            aggregate: false,
            alert: false,
            id: ""
        }
    }

    changeCollective = (e) => {
        // console.log(!this.state.aggregate);
        this.setState({
            aggregate: e.target.checked
        })
    }

    changeText = (e) => {
        // console.log(e.target.value);
        this.setState({
            username: e.target.value
        })
    }

    getUsers = () => {
        if (this.state.username) {
            let data = {
                username: this.state.username.replace(/\n /g, ","),
                individual: this.state.aggregate
            }
            axios.post('https://fe-test-zyper-engagement.herokuapp.com/start', data)
                .then(res => {
                    console.log(res);
                    let id = res.data

                    this.setState({
                        id : id
                    })
                })
                .catch(error => {
                    console.log(error);
                })
            this.setState({
                username: "",
                aggregate: false
            })
        }
        else
            this.setState({alert: true});
    }

    closeAlert = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className="SidePadding">
                <TextArea
                    rows={4} 
                    onChange={this.changeText}
                    placeholder="Enter the usernames you want to search here separated with a space or newline"
                    value={this.state.username}
                />
                <Checkbox checked={this.state.aggregate} onChange={this.changeCollective}>
                    Display individually?
                </Checkbox>
                <Button type="primary" onClick={this.getUsers}>
                    Submit
                </Button>
                {this.state.id ? (
                    <EngagerOutput wait={5000} response={this.state.id} />
                ) : null }
                {this.state.alert ? (
                    <Alert
                        message="Empty Fields"
                        description="Please write usernnames before pressing Submit"
                        type="warning"
                        showIcon
                        closable
                        onClose={this.closeAlert}
                        visible={this.state.alert}
                    />
                ) : null
                }
            </div>
        )
    }
}

export default UserInput;