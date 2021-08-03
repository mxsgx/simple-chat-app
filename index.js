const fastify = require('fastify')();

require('./bootstrap')(fastify);

fastify.listen(fastify.config.APP_PORT, '0.0.0.0', function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  const { address, port } = fastify.server.address();

  console.info(
    `Server running at http://${address}:${port}`
  );
});
