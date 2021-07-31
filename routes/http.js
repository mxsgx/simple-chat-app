const { index } = require('../controllers/http');

module.exports = function (fastify) {
  fastify.get('/*', {}, index);
};
