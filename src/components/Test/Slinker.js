/**
 * Created by slinker on 4/18/17.
 */
import React, {Component} from "react";
import {CallerStream} from "../../actions";
import $ from "jquery";

require("./../Custom.scss");

class Slinker extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        CallerStream();
    }

    render() {
        return(
            <div>
                <h3>Answer</h3>
                <h3 id="my-peer">Your id: {}</h3>
                <ul id="total-user"></ul>
                <video id="localStreamAnswer" />
                <video id="remoteStreamAnswer" />
                <div id="errorMsg"/>
                <div>
                    <button id="startButton">Start</button>
                    <button id="callButton">Call</button>
                    <button id="hangupButton">Hang Up</button>
                </div>
                <button id="receiveCall">RECEIVE CALL</button>
            </div>
        )
    }

}
export default Slinker;