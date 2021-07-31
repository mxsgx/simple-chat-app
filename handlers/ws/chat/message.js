module.exports = (socket, fastify) => (data) => {
  console.log('Payload: ', data);

  socket.emit('chat:receive', {
    text: 'Hi! from server-side',
  });
};
