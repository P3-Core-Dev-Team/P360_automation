"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginLocators = void 0;
var protractor_1 = require("protractor");
var LoginLocators = /** @class */ (function () {
    function LoginLocators() {
        this.getUrl = function () {
            return protractor_1.browser.get("http://192.168.1.50:4201/login");
        };
        this.getUsername = function () {
            return protractor_1.element(protractor_1.by.xpath("//*[@id='mat-input-0']"));
        };
        this.getPassword = function () {
            return protractor_1.element(protractor_1.by.xpath('//*[@id="mat-input-1"]'));
        };
        this.getLog = function () {
            return protractor_1.element(protractor_1.by.className('mat-raised-button mat-button-base mat-primary'));
        };
    }
    LoginLocators.prototype.signin = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    return LoginLocators;
}());
exports.LoginLocators = LoginLocators;
