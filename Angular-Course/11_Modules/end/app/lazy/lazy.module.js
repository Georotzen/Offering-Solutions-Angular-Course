"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_module_1 = require("./../core/core.module");
var lazy_component_1 = require("./components/lazy/lazy.component");
var shared_module_1 = require("./../shared/shared.module");
var lazy_routing_1 = require("./lazy.routing");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var LazyModule = (function () {
    function LazyModule() {
    }
    return LazyModule;
}());
LazyModule = __decorate([
    core_1.NgModule({
        imports: [
            // Modules
            common_1.CommonModule,
            shared_module_1.SharedModule,
            core_module_1.CoreModule,
            router_1.RouterModule.forChild(lazy_routing_1.LazyRoutes)
        ],
        declarations: [
            // Components & directives
            lazy_component_1.LazyComponent
        ],
        providers: [],
        exports: []
    })
], LazyModule);
exports.LazyModule = LazyModule;
//# sourceMappingURL=lazy.module.js.map