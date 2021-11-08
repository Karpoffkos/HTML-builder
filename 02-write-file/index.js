const fs = require("fs");

const process = require ('process');
const Emitter = require ('events');

let writeableStream = fs.createWriteStream("hello.txt");
writeableStream.write("Нажмите Enter!");

writeableStream.end("Завершение записи");
