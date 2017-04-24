var nodeEnv = process.env.NODE_ENV || 'production';

Object.defineProperty(global, 'env', {
  configurable: false,
  enumerable: false,
  writable: false,
  value: Object.freeze({
    CURRENT: nodeEnv,
    dev: (nodeEnv === 'development'),
    prod: (nodeEnv === 'production'),
    is(name) {
      return (nodeEnv === name);
    },
  }),
});
