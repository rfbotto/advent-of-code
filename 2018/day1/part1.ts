import * as fs from 'fs'

const FILE_PATH = __dirname + '/input.txt'

fs.readFile(FILE_PATH, 'utf8', (err: Error, data: string) => {
    if (err) throw err;
    const fileContents: Array<string> = data.split("\n")
    const result: string = fileContents.reduce((acc, curr) => {
        return eval(acc + curr)
    })
    console.log(result)
});
