/* const fs = require("fs");

const process = require ('process');
const Emitter = require ('events');

let writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Нажмите Enter!");

writeableStream.end("Завершение записи");


const { stdin, stdout } = process;
stdin.on('data', data => stdout.write(data));
 */
const fs = require("fs");
const path = require ('path');
const { stdin, stdout } = process;
const writeableStream = fs.createWriteStream(path.join(__dirname, "text.txt"));
stdout.write('Как дела?\n');
stdin.on('data', data => {
    
    data.toString().trim() === 'exit' ? process.exit() : writeableStream.write(data);
    writeableStream.write('');
    
});
process.on('exit', () => stdout.end('Удачи!'));
process.on('SIGINT', () => {
    process.exit();
});
  
 