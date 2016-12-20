module.exports = {
    helloWorld: function () {
        let state = 0;
        return {
            woop: function () {
                state = state + 1;
            },
            woot: function () {
                state = state + 10;
            },
            getState: function () {
                return state;
            },
        };
    },
};
