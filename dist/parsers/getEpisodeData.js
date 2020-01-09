"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexps = [
    /(сезон\S* .*) (сери\S* .*)/g,
    /(сери\S* .*) (сезон\S* .*)/g,
    /(.* сери\S*) (.* сезон\S*)/g,
    /(.* сезон\S*) (.* сери\S*)/g,
];
function getEpisodeData(text) {
    let matchResult = ["", ""];
    for (const regexp of regexps) {
        const match = regexp.exec(text);
        if (match) {
            matchResult = [match[1], match[2]];
            break;
        }
    }
    if (!matchResult[0] || !matchResult[1]) {
        return "Не могу понять. Повторите еще раз";
    }
    const result = {
        episode: matchResult[0].includes("сери") ? matchResult[0] : matchResult[1],
        season: matchResult[0].includes("сери") ? matchResult[1] : matchResult[0],
    };
    result.episode = result.episode.replace(/сери\S*/g, "").trim();
    result.season = result.season.replace(/сезон\S*/g, "").trim();
    return result;
}
exports.getEpisodeData = getEpisodeData;
//# sourceMappingURL=getEpisodeData.js.map