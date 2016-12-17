var test = require('tape');
var tapSpec = require('tap-spec');

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout);

test('simple passing equality test', function (t) {
    t.plan(2);

    t.equal(12, 6 + 5);

    t.equal('fred', 'red');
});