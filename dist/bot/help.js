"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = [
    "/add - добавить торрент для скачивания",
];
function help(ctx) {
    ctx.replyWithMarkdown(commands.join("\n"));
}
exports.help = help;
//# sourceMappingURL=help.js.map