var fs = require('fs');

// exports.Files = class {
module.exports.Files = class {
    files;

    getList() {
        this.files = fs.readdirSync('.');
        // console.log(this.files)
    }

    getInfo() {
        var s = 'This is to show how you can get information from a class by calling';
        s += ' a method in the class, which will return the text that you can do anything you want with.'
        return s;
    }
}

module.exports.Tests = class {
    n = 'dantest'

}

module.exports.Dogs = class {
    dogName = 'fido';
    horse; // horse class
    
    doBark () {
        console.log('bark bark bark!');
    }
    
    showHorseName() {
        this.horse.showHorseName();
    }
}



