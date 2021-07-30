module.exports = {
  index: function (req, res) {
    res.view('index', {
      fastify: this,
    });
  },
};
