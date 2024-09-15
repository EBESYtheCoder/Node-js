// commonJS, every file is module (by default)
// Modules - enscapsulated code (only share mininum )

const names = require('./4-names');
const sayHi = require('./5-utils');

// console.log(names)
const data = require('./6-alternative-flavor')

// console.log(data)
require('./7-mind-grinade')


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)