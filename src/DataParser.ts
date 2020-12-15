import { PathLike, createReadStream } from "fs";
import { URL } from "url";

export async function processFile(fileName: PathLike) {
    const promise = new Promise<string[]>(resolveData);

    function resolveData(resolve: (value: string[]) => void, reject: (reason: string) => void) {
        const readStream = createReadStream(fileName, { encoding: 'utf-8' });
        let result: string[] = []

        readStream.on('data', (chunk) => {
            result.push(chunk.toString());
        })

        readStream.on('error', (err) => {
           reject(err);
        })

        readStream.on('close', () => {
            resolve(result)
        })
    }

    return promise;

}

