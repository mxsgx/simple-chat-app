module.exports = function (socket, fastify) {
  const { chat } = require('../controllers/ws')(socket, fastify);

  socket.on('chat:message', chat.message);
};
