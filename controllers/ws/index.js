module.exports = function (socket, fastify) {
  return {
    chat: require('./chat')(socket, fastify),
  };
};
