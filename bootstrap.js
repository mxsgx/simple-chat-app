const path = require('path');

module.exports = function (fastify) {
  require('./config')(fastify);

  fastify.register(require('fastify-cors'), {
    origin: fastify.config.CORS_ORIGIN,
  });

  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    wildcard: false,
  });

  fastify.register(require('point-of-view'), {
    engine: {
      ejs: require('ejs'),
    },
    root: path.join(__dirname, 'resources', 'views'),
    viewExt: path.join('ejs'),
  });

  require('./routes/http')(fastify);
};
