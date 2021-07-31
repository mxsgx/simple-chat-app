module.exports = (socket, fastify) => ({
  message: require('./message')(socket, fastify),
});
