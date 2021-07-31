const fastify = require('fastify')();

require('./bootstrap')(fastify);

fastify.listen(fastify.config.APP_PORT, '0.0.0.0', function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.info(
    `Your "${fastify.config.APP_NAME}" application running at http://localhost:${fastify.config.APP_PORT}`
  );
});
