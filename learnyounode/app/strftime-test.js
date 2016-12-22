var test = require('tape');
var strftime = require('strftime');

test('strftime - format datetime as YYYY-MM-DD hh:mm', function (t) {
    var date = new Date(2016, 11, 21, 22, 36);
    var strfdate = strftime('%Y-%m-%d %T', date);
    t.equal(strfdate, '2016-12-21 22:36:00');
    t.end();
});