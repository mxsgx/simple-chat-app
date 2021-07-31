module.exports = function (socket, fastify) {
  return {
    message: require('./message')(socket, fastify),
  };
};
