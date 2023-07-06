"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventListener_1 = require("./EventListener");
var Task_1 = require("./Task");
var Application = /** @class */ (function () {
    function Application() {
        this.eventListener = new EventListener_1.EventListener();
        this.handleSubmit = function (e) {
            e.preventDefault();
            console.log('submitted');
            var titleInput = document.getElementById('title');
            if (!titleInput.value)
                return;
            var task = new Task_1.Task({ title: titleInput.value });
            console.log(task);
        };
    }
    Application.prototype.start = function () {
        // e の型は推論されるので型アノテーションは不要
        //this.eventListener.add('submit-handler', 'submit', createForm, (e) => {
        //})
        var eventListener = new EventListener_1.EventListener;
        var button = document.getElementById('deleteAllDoneTask');
        if (!button)
            return;
        eventListener.add('sample', 'click', button, function () { return alert('clicked'); });
        eventListener.remove('sample');
        var createForm = document.getElementById('createForm');
        this.eventListener.add('submit-handler', 'submit', createForm, this.handleSubmit);
    };
    return Application;
}());
window.addEventListener('load', function () {
    var app = new Application();
    app.start();
});
