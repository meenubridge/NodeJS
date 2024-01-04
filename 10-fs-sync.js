const { readFileSync, writeFileSync } = require('fs')

// read from a file system
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first);
// console.log(second);

writeFileSync('./content/new.txt', `here is the new one with ${first}, ${second}`)