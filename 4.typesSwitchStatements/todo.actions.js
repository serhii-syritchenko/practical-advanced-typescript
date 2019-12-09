"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function todoReducer(action, state) {
    if (state === void 0) { state = { todos: [] }; }
    switch (action.type) {
        case 'Add': {
            return {
                todos: __spreadArrays(state.todos, [action.payload])
            };
        }
        case "Remove All": {
            return {
                todos: []
            };
        }
    }
    return state;
}
