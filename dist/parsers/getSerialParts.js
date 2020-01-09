"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexps = [
    /(сезон\S* .*) (сери\S* .*)/g,
    /(сери\S* .*) (сезон\S* .*)/g,
    /(.* сери\S*) (.* сезон\S*)/g,
    /(.* сезон\S*) (.* сери\S*)/g,
];
function getSerialParts(text) {
    for (const regexp of regexps) {
        const match = regexp.exec(text);
        if (match) {
            return [match[1], match[2]];
        }
    }
    return [];
}
exports.getSerialParts = getSerialParts;
//# sourceMappingURL=getSerialParts.js.map