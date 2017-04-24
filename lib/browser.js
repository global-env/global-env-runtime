(function() {
  var current = 'production';

  var getGlobal = function () {
  	// the only reliable means to get the global object is
  	// `Function('return this')()`
  	// However, this causes CSP violations in Chrome apps.
  	if (typeof self !== 'undefined') { return self; }
  	if (typeof window !== 'undefined') { return window; }
  	if (typeof global !== 'undefined') { return global; }
  	throw new Error('unable to locate global object');
  };

  // First, grab the global value:
  var g = getGlobal();
  // Try to see if freeze is available, otherwise fallback to plain object:
  var freeze = Object.freeze || Object;

  // Define "global" if it's not globally defined:
  if (typeof global === 'undefined') {
    g.global = g;
  }

  Object.defineProperty(g, 'env', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: freeze({
      CURRENT: current,
      dev: (current === 'development'),
      prod: (current === 'production'),
      is(name) {
        return (current === name);
      },
    }),
  });
})();
