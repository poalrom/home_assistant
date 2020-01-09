"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const numeralize_ru_1 = __importDefault(require("numeralize-ru"));
const cache = {};
for (let i = 0; i < 10000; i++) {
    cache[numeralize_ru_1.default(i)] = i;
}
function getNumberByName(numberName) {
    return cache[numberName];
}
exports.getNumberByName = getNumberByName;
//# sourceMappingURL=getNumberByName.js.map