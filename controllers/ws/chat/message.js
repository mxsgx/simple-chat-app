module.exports = function (socket, fastify) {
  return function (data) {
    console.log('Payload: ', data);

    socket.emit('chat:receive', {
      text: 'Hi! from server-side',
    });
  };
};
