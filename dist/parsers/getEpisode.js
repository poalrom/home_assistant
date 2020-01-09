"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Az_1 = require("../modules/Az");
const EPISODE_KEY_CODES = [
    "серия",
];
async function getEpisode(text) {
    const tokens = text.toLocaleLowerCase().split(" ");
    let episodeTextNumber = "";
    for (const token of tokens) {
        const tokenDescription = await Az_1.morph(token);
        const normalForm = String(tokenDescription[0].normalize());
        console.log(normalForm, EPISODE_KEY_CODES.includes(normalForm));
        if (!EPISODE_KEY_CODES.includes(normalForm)) {
            episodeTextNumber += " " + normalForm;
            continue;
        }
        break;
    }
    console.log(episodeTextNumber);
    console.log(tokens);
}
exports.getEpisode = getEpisode;
//# sourceMappingURL=getEpisode.js.map