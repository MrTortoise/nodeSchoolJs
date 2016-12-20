var module = require('./someModule');

var obj = module.helloWorld();
obj.woop();
console.log(obj.getState());
obj.woop();
console.log(obj.getState());
obj.woop();
console.log(obj.getState());

obj.woot();
console.log(obj.getState());
