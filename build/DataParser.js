"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processFile = void 0;
const fs_1 = require("fs");
async function processFile(fileName) {
    const promise = new Promise(resolveData);
    function resolveData(resolve, reject) {
        const readStream = fs_1.createReadStream(fileName, { encoding: 'utf-8' });
        let result = [];
        readStream.on('data', (chunk) => {
            result.push(chunk.toString());
        });
        readStream.on('error', (err) => {
            reject(err);
        });
        readStream.on('close', () => {
            resolve(result);
        });
    }
    return promise;
}
exports.processFile = processFile;
//# sourceMappingURL=DataParser.js.map