const { Files } = require('./server2');
const {Horse} = require('./horseClasses')

console.clear();
console.log(new Date().toLocaleString());

f = new Files();
f.getList();
console.log(f.files);

var info = f.getInfo();
console.log(info);

var h = new Horse();
var data = h.getHorsesList();
console.log(data);
