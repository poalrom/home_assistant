"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TRUE_ANSWERS = [
    "да",
    "ок",
    "норм",
];
const FALSE_ANSWERS = [
    "нет",
    "ноп",
    "неправильно",
];
function textToBoolean(text) {
    const normalizedText = text.trim().toLocaleLowerCase();
    if (TRUE_ANSWERS.includes(normalizedText)) {
        return true;
    }
    if (FALSE_ANSWERS.includes(normalizedText)) {
        return false;
    }
    return "Не понимаю тебя. Можно проста да или нет?";
}
exports.textToBoolean = textToBoolean;
//# sourceMappingURL=textToBoolean.js.map