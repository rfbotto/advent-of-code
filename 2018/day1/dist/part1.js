"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const FILE_PATH = __dirname + '/input.txt';
fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err)
        throw err;
    const fileContents = data.split("\n");
    const result = fileContents.reduce((acc, curr) => {
        return eval(acc + curr);
    });
    console.log(result);
});
