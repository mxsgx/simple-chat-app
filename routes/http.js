const { index } = require('../handlers/http');

module.exports = function (fastify) {
  fastify.get('/*', {}, index);
};
