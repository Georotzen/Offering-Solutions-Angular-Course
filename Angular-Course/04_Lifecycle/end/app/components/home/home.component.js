"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    // only called for/if there is an @input variable set by parent.
    HomeComponent.prototype.ngOnChanges = function (changes) {
        console.log('ngOnChanges');
        console.log(changes);
    };
    HomeComponent.prototype.ngOnInit = function () { console.log('OnInit'); };
    // ACHTUNG!!!
    HomeComponent.prototype.ngDoCheck = function () { console.log('DoCheck'); };
    HomeComponent.prototype.ngAfterContentInit = function () { console.log('AfterContentInit'); };
    // ACHTUNG!!!
    HomeComponent.prototype.ngAfterContentChecked = function () { console.log('AfterContentChecked'); };
    HomeComponent.prototype.ngAfterViewInit = function () { console.log('AfterViewInit'); };
    // ACHTUNG!!!
    HomeComponent.prototype.ngAfterViewChecked = function () { console.log('AfterViewChecked'); };
    HomeComponent.prototype.ngOnDestroy = function () { console.log('OnDestroy'); };
    return HomeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HomeComponent.prototype, "textForOnChanges", void 0);
HomeComponent = __decorate([
    core_2.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: './home.component.html'
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map