module.exports = function (urls, callBack) {
    var urls = urls;
    let isComplete = false;
    var callBack = callBack;
    let urlData = {};
    var completed = 0;

    this.complete = function () {
        return isComplete;
    };

    this.completeUrl = function (url, content) {
        if (!(url in urlData)) {
            completed = completed + 1;
        }

        urlData[url] = content;

        checkComplete();
    };

    function checkComplete() {
        if (completed == urls.length) {
            isComplete = true;

            let callbackResult = [];

            for (var i = 0; i < urls.length; i++) {
                callbackResult.push(
                    {
                        index: i,
                        url: urls[i],
                        content: urlData[urls[i]]
                    });
            }
            callBack(callbackResult);
        }
    };
};
