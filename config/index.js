const fs = require('fs');
const path = require('path');
const envSchema = require('env-schema');
const Ajv = require('ajv');

module.exports = function (fastify) {
  let options = {
    dotenv: true,
    schema: {
      type: 'object',
      required: [],
      properties: {},
    },
    ajv: new Ajv({
      allErrors: true,
      allowUnionTypes: true,
      coerceTypes: true,
      removeAdditional: true,
      useDefaults: 'empty',
    }),
  };

  fs.readdirSync(__dirname)
    .filter((fileName) => fileName !== path.basename(__filename))
    .forEach((fileName) => {
      let schema = require(path.join(__dirname, fileName));

      for (let key in schema) {
        options.schema.required.push(key);
      }

      Object.assign(options.schema.properties, schema);
    });

  fastify.decorate('config', envSchema(options));
};
