"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.events = {};
        this.events = {};
    }
    EventEmitter.prototype.register = function (eventType, handler) {
        this.events[eventType] = handler;
    };
    EventEmitter.prototype.emit = function (eventType, payload) {
        this.events[eventType](payload);
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=eventEmitter.js.map