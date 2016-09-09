"use strict";
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/observable/range');
var sequence = Observable_1.Observable.range(1, 100)
    .map(function (item) {
    if (item % 3 === 0 || item % 5 === 0) {
        if (item % 3 === 0 && item % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (item % 3 === 0) {
            console.log("Fizz");
        }
        else {
            console.log("Buzz");
        }
    }
    else {
        console.log(item);
    }
});
sequence.subscribe(function (item) { return item; });
