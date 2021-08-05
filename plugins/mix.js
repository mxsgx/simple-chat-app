const fs = require('fs');
const path = require('path');
const mixManifestPath = path.resolve(
  process.cwd(),
  'public',
  'mix-manifest.json'
);

module.exports = function (fastify) {
  fastify.decorate('mix', function (path) {
    if (fs.existsSync(mixManifestPath)) {
      const manifest = require(mixManifestPath);

      if (manifest.hasOwnProperty(path)) {
        return manifest[path];
      }
    }

    return path;
  });
};
