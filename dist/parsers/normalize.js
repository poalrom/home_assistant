"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Az_1 = require("../modules/Az");
async function normalize(text) {
    const tokens = text.trim().toLocaleLowerCase().split(" ");
    const result = [];
    for (const token of tokens) {
        const tokenDescription = await Az_1.morph(token);
        result.push(String(tokenDescription[0].normalize()));
    }
    return result.join(" ");
}
exports.normalize = normalize;
//# sourceMappingURL=normalize.js.map