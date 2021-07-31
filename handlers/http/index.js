module.exports = {
  index: (req, res) => {
    res.view('index', {
      fastify: this,
    });
  },
};
