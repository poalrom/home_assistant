"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function registerCommandByTriggers(alice, triggers, handler) {
    for (const trigger of triggers) {
        alice.command(trigger, handler);
    }
}
exports.registerCommandByTriggers = registerCommandByTriggers;
//# sourceMappingURL=registerCommandByTriggers.js.map