const _ = require('lodash');

const numbers = [52,65,14,20,50];

_.each(numbers, function(number, i){
    console.log(number);
});