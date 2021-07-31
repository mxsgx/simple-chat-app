module.exports = (socket, fastify) => ({
  chat: require('./chat')(socket, fastify),
});
