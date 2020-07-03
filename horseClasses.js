exports.Horse = class {
    name = 'wwwwww';

    constructor() {
        console.log('constucting horses');
    }

    showHorseName() {
        // console.log('showing from inside the class method: ', this.name);
    }

    getHorsesList(){
        var data = [];
        for (var i=0; i < 10; i++){
            var age1 = Math.random() * 80 + 10;    
            age1 = Math.round(age1);    
            var dd = new Date().toLocaleDateString()
            data.push({name : Math.random() + '', age: age1 + '', birthDate: dd})
        }
        return data;
    }
}

exports.Pony = class {
    name = 'Pony';
}

class Zebra {
    static doIt() {
        console.log('in Zebra')
        return 'abc';
    }

}

exports.globalVars = {name: 'bill', city: 'dallas'}

exports.Zebra = Zebra;
