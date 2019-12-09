"use strict";
exports.__esModule = true;
var Add = /** @class */ (function () {
    function Add(payload) {
        this.payload = payload;
        this.type = 'Add';
    }
    return Add;
}());
exports.Add = Add;
var RemoveAll = /** @class */ (function () {
    function RemoveAll() {
        this.type = "Remove All";
    }
    return RemoveAll;
}());
exports.RemoveAll = RemoveAll;
