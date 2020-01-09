"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const acceptedUsers = ["poalrom"];
function accessControl(ctx, next) {
    if (!acceptedUsers.includes(ctx.from.username)) {
        ctx.reply("Вы кто такие? Я вас не звал!");
        return;
    }
    next();
}
exports.accessControl = accessControl;
//# sourceMappingURL=access-control.js.map