module.exports = {
    val: 5,
    callBackFunc: null,
    setter: function (value) {
        val = value;
    },
    callBacker: function (callback) {
        callback(val);
    },
    callBackFuncSet: function (callback) {
        callBackFunc = callback;
    },
    callSetCallBack: function () {
        callBackFunc(val);
    },
};
