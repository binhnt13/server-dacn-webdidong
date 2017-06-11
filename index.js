const io = require('socket.io')(process.env.PORT || 3000);

const arrUserInfo = [];

io.on('connection', socket => {
    socket.on('REGISTER', user => {
        const isExist = arrUserInfo.some(e => e.ten === user.ten);
        socket.peerIdAnswer = user.peerId;
        if (isExist) return socket.emit('DUPLICATE');
        arrUserInfo.push(user);
        io.emit('NEW', user);
        console.log(arrUserInfo);
    });
    socket.on('GET_LIST_USER', () => {
        console.log(arrUserInfo);
        socket.emit('USER_ARRAY', arrUserInfo);
    });
    socket.on('CONNECT_USER', user => {
        socket.peerIdCaller = user.peerIdCaller;
        const index = arrUserInfo.findIndex(user => user.peerId === socket.peerIdAnswer);
        arrUserInfo.splice(index, 1);
        io.emit('USER_BUSY', user)
    });
    socket.on('disconnect', () => {
        if (socket.peerIdAnswer) {
            const index = arrUserInfo.findIndex(user => user.peerId === socket.peerIdAnswer);
            arrUserInfo.splice(index, 1);
            io.emit('USER_OFFLINE', socket.peerIdAnswer)
        }
        // else {
        //     arrUserInfo.forEach(user => {
        //         if (user.peerIdCaller === socket.peerIdCaller) {
        //             console.log(12312);
        //             arrUserInfo.push(user);
        //             return io.emit('NEW', user)
        //         }
        //     });
        // }
    })
});