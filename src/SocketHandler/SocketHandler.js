/**
 * Created by slinker on 4/15/17.
 */
// Core
import io from "socket.io-client";
import jwt from "jwt-decode";
// Import const
import * as Const from "../constants/init";

import * as skName from "../constants/socketName";

const token = localStorage.getItem('token') || '{}';

let socket;

function openSocket(dispatch) {
    socket = io(Const.ServerUrl, {
        reconnection: true,
        'query': 'token=' + JSON.parse(token)
    });


    socket.on('connect', function () {
        const user = jwt(token);
        // Emit event join room
        socket.emit(skName.SK_USER_JOHN_FACEBOOK, {
            userID: user.userID
        });

    });

    socket.on('error', function (error) {
    })
}

function getSocket() {
    return socket;
}

export {
    openSocket,
    getSocket
}