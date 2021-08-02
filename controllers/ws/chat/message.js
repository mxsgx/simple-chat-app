module.exports = function (socket, fastify) {
  return function (data) {
    socket.emit('chat:receive', data);
    socket.broadcast.emit('chat:receive', data);
  };
};
