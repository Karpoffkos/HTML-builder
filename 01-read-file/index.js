
const fs = require ('fs');
const path = require ('path');

/* fs.readFile('./01-read-file/text.txt', (err, data) => {
    if  (err) {
        console.log(err);
    }
    console.log(data.toString());
    }
); */

const readStream = fs.createReadStream('./01-read-file/text.txt');

readStream.on('data', (chunk)=>{
console.log(chunk.toString());
})