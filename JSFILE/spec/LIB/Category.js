"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
var protractor_1 = require("protractor");
var category = /** @class */ (function () {
    function category() {
        this.managecategor = protractor_1.element(protractor_1.by.css("button[mattooltip='Manage Categories']"));
        this.addbutton = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'add_circle')]"));
        this.category = protractor_1.element(protractor_1.by.css("input[ng-reflect-name='category']"));
        this.descrip = protractor_1.element(protractor_1.by.css("input[ng-reflect-name='description']"));
        this.Save = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Save')] "));
        this.searchcat = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Category')] "));
        this.searchcate = protractor_1.element(protractor_1.by.css("input[placeholder='Search Category']"));
        this.selectcat = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Automation category')]"));
        this.Edit = protractor_1.element.all(protractor_1.by.xpath("//*[contains(text(),'edit')]")).get(4);
        this.Delete = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'delete')]"));
        this.cancel = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Cancel')]"));
        this.update = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Update')]"));
    }
    return category;
}());
exports.category = category;
