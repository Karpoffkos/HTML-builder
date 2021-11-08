
const fs = require ('fs');
const path = require ('path');
const fileText = path.join(__dirname, "text.txt");
/* fs.readFile('./01-read-file/text.txt', (err, data) => {
    if  (err) {
        console.log(err);
    }
    console.log(data.toString());
    }
); */

const readStream = fs.createReadStream(fileText);

readStream.on('data', (chunk)=>{
console.log(chunk.toString());
})