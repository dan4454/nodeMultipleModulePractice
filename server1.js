//

console.clear()

const { Files } = require('./server2');
const { Horse } = require('./horseClasses')

const { Tests } = require('./server2');

example = require('./server2.js');
console.log(example);




d = new example.Dogs();
console.log(d.dogName);
d.doBark();
d.horse = new Horse();
d.showHorseName();

// t = new Tests();
// console.log(t.n);

// dog = Dogs();
// console.log(dog.dogName);


// console.clear();
// console.log(new Date().toLocaleString());

// f = new Files();
// f.getList();
// console.log(f.files);

// var info = f.getInfo();
// console.log(info);

// var h = new Horse();
// var data = h.getHorsesList();
// console.log(data);
