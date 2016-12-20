module.exports = function (first, last) {
    this.first = first;
    this.last = last;

    this.fullName = function () {
        return this.first + ' ' + this.last;
    };
};