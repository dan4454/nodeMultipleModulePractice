const { Files } = require('./server2');

console.clear();
console.log(new Date().toLocaleString());

f = new Files();
f.getList();
console.log(f.files);

var info = f.getInfo();
console.log(info);
