/**
 * Created by slinker on 4/15/17.
 */
import _ from "lodash";
import jwt from "jwt-decode";
//
import SystemAction from "./SystemAction";
import * as actionTypes from "../constants/actionTypes";
import {hashHistory} from "react-router";
//
import {openSocket} from "../SocketHandler";

import {
    getSocket
} from '../SocketHandler';

class AdminActions extends SystemAction {
    constructor() {
        super();
    }

    login = (params, callback) => (dispatch) => {

        const data = {
            username: params.username,
            password: params.password,
            isAdmin: params.isAdmin
        };

        this.CallAPI({
            url: '/user/login',
            method: 'POST',
            data
        }, function (err, response) {
            if (err) {
                return callback('Can not connect to server');
            }
            if (!response.success) {
                return callback(response.result.message);
            } else {
                // Save token to local storage
                localStorage.setItem('token', JSON.stringify(response.result.token));
                // Send action user login success
                dispatch({
                    type: actionTypes.IS_AUTHEN,
                    payload: response.result
                });
                hashHistory.push('/admin');

                openSocket(dispatch);
            }
        })
    };

    logout = () => (dispatch) => {
        this.removeLocalStorage('token');
        hashHistory.push('/admin/login');
        dispatch({
            type: actionTypes.IS_NOT_AUTHEN
        });
    };

    getTotalUser = () => (dispatch) => {
        this.CallAPI({
            url: '/user/getTotalUser',
            method: 'GET',
            data: {}
        }, function (err, response) {

            if (response.success) {
                dispatch({
                    type: actionTypes.UPDATE_TOTAL_USER,
                    payload: response.result.totalUser
                })
            }
        })
    };

    checkAuthen = () => (dispatch) => {
        const token = JSON.parse(localStorage.getItem('token') || '{}');
        // Decode token
        if (_.isObject(token)) {
            hashHistory.push('/admin/login');
            dispatch({
                type: actionTypes.IS_NOT_AUTHEN
            });
        } else {
            const user = jwt(token);
            // Emit event join to Room
            openSocket(dispatch);

            const socket = getSocket();
            socket.emit('test', {
                message: 'ahihi'
            });
            if (user.isAdmin) {
                // hashHistory.push('/admin');
                dispatch({
                    type: actionTypes.IS_AUTHEN,
                    payload: user
                });
            } else {
                this.removeLocalStorage('token');
                hashHistory.push('/admin/login');
                dispatch({
                    type: actionTypes.IS_NOT_AUTHEN
                });
            }
        }
    };
}

export default new AdminActions();