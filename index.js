const io = require('socket.io')(process.env.PORT || 3000);

const arrUserInfo = [];

io.on('connection', socket => {
    socket.on('REGISTER', user => {
        const isExist = arrUserInfo.some(e => e.ten === user.ten);
        socket.peerId = user.peerId;
        if (isExist) return socket.emit('DUPLICATE');
        arrUserInfo.push(user);
        io.emit('NEW', user);
    });
    socket.on('RECEIVE_CALL', callee => {
        console.log(callee);
        socket.emit('USER_ARRAY', arrUserInfo);
    });
    socket.on('disconnect', () => {
        const index = arrUserInfo.findIndex(user => user.peerId === socket.peerId);
        arrUserInfo.splice(index, 1);
        io.emit('USER_DISCONNECT', socket.peerId)
    })
});