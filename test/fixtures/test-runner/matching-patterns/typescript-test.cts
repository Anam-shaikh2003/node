const test = require('node:test');

// 'as string' ensures that type stripping actually occurs
test('this should pass' as string);
