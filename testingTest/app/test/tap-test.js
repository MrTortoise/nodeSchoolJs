let test = require('tape');
let tapSpec = require('tap-spec');

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout);

test('simple passing equality test', function (t) {
    t.plan(1);
    t.equal(12, 5 + 6);
});
