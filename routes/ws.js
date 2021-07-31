module.exports = (socket, fastify) => {
  const { chat } = require('../handlers/ws')(socket, fastify);

  socket.on('chat:message', chat.message);
};
