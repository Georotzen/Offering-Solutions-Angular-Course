"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UppercasePipe = (function () {
    function UppercasePipe() {
    }
    UppercasePipe.prototype.transform = function (value) {
        if (!value) {
            return null;
        }
        return value.toUpperCase();
    };
    return UppercasePipe;
}());
UppercasePipe = __decorate([
    core_1.Pipe({
        name: 'myUppercase'
    }),
    core_1.Injectable()
], UppercasePipe);
exports.UppercasePipe = UppercasePipe;
//# sourceMappingURL=uppercase.pipe.js.map