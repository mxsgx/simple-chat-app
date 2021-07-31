const { index } = require('../controllers/http');

module.exports = (fastify) => {
  fastify.get('/*', {}, index);
};
