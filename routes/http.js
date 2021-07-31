const { index } = require('../handlers/http');

module.exports = (fastify) => {
  fastify.get('/*', {}, index);
};
