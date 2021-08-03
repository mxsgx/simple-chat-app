module.exports = {
  APP_NAME: {
    type: 'string',
    default: 'Simple Chat App',
  },
  APP_PORT: {
    type: 'number',
    default: process.env.PORT || 3000,
  },
};
