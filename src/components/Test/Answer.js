/**
 * Created by slinker on 4/18/17.
 */
import React, {Component} from "react";
import {AnswerStream} from "../../actions";
import $ from "jquery";

require("./../Custom.scss");

export default class Caller extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

    componentDidMount() {
        AnswerStream();
    }

    onChangeUsername = (e) => {
        this.setState({username: e.target.value})
    };

    render() {
        return(
            <div>
                <h3>Caller</h3>
                <h3 id="my-peer">Your id: {}</h3>
                <video id="localStream" />
                <video id="remoteStream" />
                <div id="errorMsg"/>
                <input type="text" id="remoteId" placeholder="Remote ID" />
                <div className="show-register-success">
                    <button id="startButton">Start</button>
                    <button id="callButton">Call</button>
                    <button id="hangupButton">Hang Up</button>
                </div>
                <input className="hide-register-success" type="text" id="username" placeholder="Type your username" onChange={this.onChangeUsername}/>
                <p id="register-duplicate">Vui long chon ten khac!</p>
                <p className="show-register-success">Dang ki thanh cong user: {this.state.username}. Ban co the bam goi</p>
                <br/>
                <button className="hide-register-success" id="signUp">Sign Up</button>
            </div>
        )
    }

}