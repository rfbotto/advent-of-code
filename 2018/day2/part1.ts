import * as fs from 'fs'
import * as path from 'path'

const FILE_PATH = path.join(__dirname, '../', 'input.txt')

fs.readFile(FILE_PATH, 'utf-8', (error: Error, data: string) => {
    if (error) throw (error)
    const fileContents: Array<string> = data.split('\n')

    let twoLetterIds: number = 0
    let threeLetterIds: number = 0

    for (const boxId of fileContents) {
        if (has2RepeatedCharacters(boxId)) twoLetterIds += 1
        if (has3RepeatedCharacters(boxId)) threeLetterIds += 1
    }

    console.log(twoLetterIds * threeLetterIds)
})

const hasXRepeatedCharacters = (noRepeatedCharacters: number) => (search: string): boolean => {
    for (const letter of search) {
        const numberLetterOccurrences = search.match(new RegExp(letter, 'g'))
        if (numberLetterOccurrences && numberLetterOccurrences.length === noRepeatedCharacters) {
            return true
        }
    }

    return false
}

const has2RepeatedCharacters = hasXRepeatedCharacters(2)
const has3RepeatedCharacters = hasXRepeatedCharacters(3)
