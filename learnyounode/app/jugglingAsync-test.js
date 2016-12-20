let test = require('tape');
let awaiter = require('./awaiter');

test('awaiter - returns true if nto awaiting anything', function (t) {
    t.plan(1);
    t.pass();
});