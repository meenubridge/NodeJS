const path = require('path')

console.log(path.sep);
// to join a file path
const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath);
const base = path.basename(filepath)
console.log(base);

//to know the full path

const absolute = path.resolve(__dirname,'content', 'subfolder', 'test.txt')
console.log(absolute);