"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListener = void 0;
var EventListener = /** @class */ (function () {
    function EventListener() {
        this.listeners = {};
    }
    EventListener.prototype.add = function (listenerId, event, element, handler) {
        this.listeners[listenerId] = {
            event: event,
            element: element,
            handler: handler,
        };
        element.addEventListener(event, handler);
    };
    EventListener.prototype.remove = function (listenerId) {
        var listener = this.listeners[listenerId];
        if (!listener)
            return;
        listener.element.removeEventListener(listener.event, listener.handler);
        delete this.listeners[listenerId];
    };
    return EventListener;
}());
exports.EventListener = EventListener;
