let test = require('tape');

test('simple passing equality test', function (t) {
    t.plan(2);

    t.equal(12, 6 + 6);

    t.equal('fred', 'fred');
});
