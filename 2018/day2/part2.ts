import * as fs from 'fs'
import * as path from 'path'
import { levenshteinDistance } from './utils';

const FILE_PATH = path.join(__dirname, '../', 'input.txt')

fs.readFile(FILE_PATH, 'utf-8', (error: Error, data: string) => {
    if (error) throw (error)
    const fileContents: Array<string> = data.split('\n')

    for (const currentBoxId of fileContents) {
        const remainingBoxesId = fileContents.filter(item => item !== currentBoxId);
        for (const boxId of remainingBoxesId) {
            if (levenshteinDistance(currentBoxId, boxId) === 1) {
                console.log(commonSubstring(currentBoxId, boxId))
                return
            }
        }
    }
})

const commonSubstring = (a: string, b: string): string | undefined => {
    const arrayA = Array.from(a)
    const arrayB = Array.from(b)

    for (const [key, value] of arrayB.entries()) {
        if (arrayA[key] !== value) {
            return (b.slice(0, key) + b.slice(key + 1, b.length))
        }
    }
}