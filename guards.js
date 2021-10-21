var strip = function (x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
};
var myHeader = /** @class */ (function () {
    function myHeader() {
        this.header = 'response header';
        this.result = 'response message';
    }
    return myHeader;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'Error header';
        this.messege = 'error messege';
    }
    return MyError;
}());
var res = new myHeader();
var result = function (res) {
    if (res instanceof myHeader) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.messege
        };
    }
};
console.log(result(res));
