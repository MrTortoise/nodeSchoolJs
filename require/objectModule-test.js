let test = require('tape');

test('access state in a required object.', function (t) {
    t.plan(1);
    let module = require('./objectModule');
    let instance = new module('test', 'mctest');
    t.equal(instance.fullName(), 'test mctest');
});