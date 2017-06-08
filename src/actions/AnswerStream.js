/**
 * Created by Lotus on 5/27/17.
 */
import $ from "jquery";
import io from "socket.io-client";
import {ServerUrl} from "./../constants/init";

'use strict';

export default function AnswerStream() {

    const socket = io(ServerUrl);

    $('#register-duplicate').hide();
    $('.show-register-success').hide();
    $('#user-call').hide();

    socket.on('DUPLICATE', () => {
        $('.show-register-success').hide();
        $('#user-call').hide();
        $('#register-duplicate').show();
        $('.hide-register-success').show();
    });

    function openStream() {
        const config = { audio: false, video: true };
        return navigator.mediaDevices.getUserMedia(config);
    }

    function playStream(idVideoTag, stream) {
        const video = document.getElementById(idVideoTag);
        video.srcObject = stream;
        video.play();
    }

    // openStream().then(stream => playStream('localStream', stream));

    const peer = new Peer({key: '6s0m3tmiyz0py14i'});

    peer.on('call', call => {
        openStream()
            .then(stream => {
                call.answer(stream);
                playStream('localStream', stream);
                call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
            });
    });

    peer.on('open', id => {
        $('#my-peer').append(id);
        $('#signUp').click(() => {
            const username = $('#username').val();
            socket.emit('REGISTER', { ten: username, peerId: id});
            $('#register-duplicate').hide();
            $('.hide-register-success').hide();
            $('#user-call').show();
            $('.show-register-success').show();
        });
    });

    // $('#callButton').click(() => {
    //     const id = $('#remoteId').val();
    //     console.log(id);
    //     openStream()
    //         .then(stream => {
    //             playStream('localStream', stream);
    //             const call = peer.call(id, stream);
    //             call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
    //         });
    // });

}

