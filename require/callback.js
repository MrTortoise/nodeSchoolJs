let test = require('tape');

test('see if the calblack is called from funtion it is passed into', function (t) {
    let callbackModule = require('./callbackModule');
    t.plan(1);
    let value = 'fred';
    let setVal = '';
    callbackModule.setter(value);
    callbackModule.callBacker(function (val) {
        setVal = val;
    });
    t.true(value === setVal);
});

test('see if the callback func can be stored', function (t) {
    let callbackModule = require('./callbackModule');
    t.plan(1);
    let value = 'fred';
    let setVal = '';
    callbackModule.setter(value);
    callbackModule.callBackFuncSet(function (val) {
        setVal = val;
    });
    callbackModule.callSetCallBack();
    t.true(value === setVal);
});