/**
 * Created by Lotus on 5/27/17.
 */
import $ from "jquery";
import io from "socket.io-client";
import {ServerUrl} from "./../constants/init";

'use strict';

export default function CallerStream() {

    const socket = io(ServerUrl);

    socket.on('USER_ARRAY', arrUserInfo => {
        arrUserInfo.forEach(user => {
            const {ten, peerId} = user;
            $('#total-user').append(`<li id="${peerId}">${ten}</li>`);
        });

        socket.on('NEW', user => {
            const {ten, peerId} = user;
            $('#total-user').append(`<li id="${peerId}">${ten}</li>`);
        });

        socket.on('USER_DISCONNECT', peerId => {
            $(`#${peerId}`).remove();
        });
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

    peer.on('open', id => {
        $('#my-peer').append(id);
        socket.emit('RECEIVE_CALL', { ten: 'admin', peerId: id});
    });

    // Caller
    peer.on('call', call => {
        openStream()
            .then(stream => {
                call.answer(stream);
                playStream('localStreamAnswer', stream);
                call.on('stream', remoteStream => playStream('remoteStreamAnswer', remoteStream));
            });
    });

    $('#total-user').on('click', 'li', function () {
        const id = $(this).attr('id');
        console.log(id);
        openStream()
            .then(stream => {
                playStream('localStreamAnswer', stream);
                const call = peer.call(id, stream);
                call.on('stream', remoteStream => playStream('remoteStreamAnswer', remoteStream));
            });
    });

}
