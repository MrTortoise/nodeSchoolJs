let test = require('tape');

/*
completed callback is called with the url content when all 3 urls are completed.
complete returns false when an url is not completed.
when url is completed awaiter returns its content.

*/

test('awaiter - returns true if not awaiting anything', function (t) {
    let awaiter = require('./awaiter');
    let instance = new awaiter();
    t.plan(1);
    t.false(instance.complete(), "awaiter is completed when empty");
});

test('awaiter - returns false if soemthing added and nothing complete', function (t) {
    t.plan(1);

    let awaiter = require('./awaiter');
    let instance = new awaiter('testUrl', function () { });
    t.false(instance.complete(), 'awaiter is not complerte if has single item and not completed.');
});

test('awaiter - return content if url added and completes', function (t) {
    var didComplete = false;
    let testUrl = ['testUrl'];
    let content = 'woop';
    let awaiter = require('./awaiter');
    let instance = new awaiter(testUrl, function (urlContents) {
        didComplete = true;
        t.equal(0, urlContents[0].index, 'order of output should match order of url as passed in by index.');
        t.equal(testUrl[0], urlContents[0].url, 'order of output should match order of url as passed in by url.');
        t.equal(content, urlContents[0].content, 'content of the output should be as passed in when completed.');
    });
    instance.completeUrl(testUrl, content);
    t.true(didComplete, 'the callback should get called.')
    t.true(instance.complete(), 'awaiter should complerte if single gets content.');
    t.end();
});

test('awaiter - add multiple complete one, should be uncomplete and no callback ', function (t) {
    t.plan(2);
    var didComplete = false;
    let testUrls = ['testUrl1', 'testUrl2'];
    let content0 = 'woop';
    let content1 = 'woop2';
    let awaiter = require('./awaiter');
    let instance = new awaiter(testUrls, function (urlContents) {
        didComplete = true;
    });
    instance.completeUrl(testUrls[0], content0);
    t.false(didComplete, 'the callback should not get called.')
    t.false(instance.complete(), 'awaiter should complerte if single gets content.');
});

test('awaiter - add multiple complete all out of order, should be complete and callback ', function (t) {
    var didComplete = false;
    let testUrls = ['testUrl1', 'testUrl2', 'testUrl3'];
    let content = ['woop0', 'woop1', 'woop2'];

    let awaiter = require('./awaiter');
    let instance = new awaiter(testUrls, function (urlContents) {
        didComplete = true;
        for (var i = 0; i < testUrls.length; i++) {
            t.equal(i, urlContents[i].index, 'order of output should match order of url as passed in by index.');
            t.equal(testUrls[i], urlContents[i].url, 'order of output should match order of url as passed in by url.');
            t.equal(content[i], urlContents[i].content, 'content of the output should be as passed in when completed.');
        }
    });

    instance.completeUrl(testUrls[2], content[2]);
    instance.completeUrl(testUrls[0], content[0]);
    instance.completeUrl(testUrls[1], content[1]);

    t.true(didComplete, 'the callback should not get called.')
    t.true(instance.complete(), 'awaiter should complerte if single gets content.');
    t.end();
});
