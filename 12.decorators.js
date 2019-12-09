"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
function GetTodos(target, name) {
    var init = function () {
        return node_fetch_1["default"]('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) { return response.json(); });
    };
    Object.defineProperty(target, name, {
        get: function () {
            return init();
        }
    });
}
var TodoService = /** @class */ (function () {
    function TodoService() {
    }
    __decorate([
        GetTodos
    ], TodoService.prototype, "todos");
    return TodoService;
}());
var todoService = new TodoService();
todoService.todos.then(function (todos) {
    console.log(todos);
});
