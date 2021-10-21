var rect1 = {
    id: '123',
    color: '#fff',
    size: {
        width: 20,
        height: 20
    }
};
var rect2 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    }
};
rect2.color = 'black';
var rect3 = {};
var rect4 = {};
console.log(rect3);
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    calcArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(rect5.calcArea());
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '20px',
    padding: '10px'
};
