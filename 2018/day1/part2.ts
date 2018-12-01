import * as fs from 'fs'

const FILE_PATH = __dirname + '/input.txt'

fs.readFile(FILE_PATH, 'utf8', (err: Error, data: string) => {
    if (err) throw err;
    const fileContents: Array<string> = data.split("\n")

    const seenFrequencies: Set<number> = new Set()
    let currentFrequency = 0
    let counter = 0

    while (true) {
        currentFrequency = eval(currentFrequency + fileContents[counter % fileContents.length])
        if (seenFrequencies.has(currentFrequency)) break
        seenFrequencies.add(currentFrequency)
        counter += 1
    }

    console.log(currentFrequency)
});
