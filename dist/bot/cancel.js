"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cancel(ctx) {
    ctx.session.mode = undefined;
    ctx.reply("Всё сброшено, чем займемся дальше?");
}
exports.cancel = cancel;
//# sourceMappingURL=cancel.js.map