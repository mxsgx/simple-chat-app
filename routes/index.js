module.exports = function (fastify) {
  fastify.get('/*', {}, (req, res) => {
    res.view('index', {
      fastify,
    });
  });
};
