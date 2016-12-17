let test = require('tape');

test('simple passing equality test', function (t) {
    t.plan(2);

    t.equal(12, 6 + 5);

    t.equal('fred', 'red');
});
