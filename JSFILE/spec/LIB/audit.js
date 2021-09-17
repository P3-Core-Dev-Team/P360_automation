"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audits = void 0;
var protractor_1 = require("protractor");
var audits = /** @class */ (function () {
    function audits() {
        this.auditview = protractor_1.element(protractor_1.by.css("[mattooltip='Audit view']"));
        this.filter = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'filter_alt')]"));
        this.applybutton = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Apply ')]"));
        this.export = protractor_1.element.all(protractor_1.by.xpath("//*[contains(text(),'download')]")).get(1);
        this.exportbutton = protractor_1.element.all(protractor_1.by.xpath("//*[contains(text(),'Export ')]")).get(1);
        this.jobname = protractor_1.element(protractor_1.by.css("input[ng-reflect-type='text']"));
        this.clickok = protractor_1.element.all(protractor_1.by.xpath("//*[contains(text(),'Ok')]")).get(2);
        this.backgroundjob = protractor_1.element(protractor_1.by.css("[mattooltip='Background Jobs']"));
    }
    return audits;
}());
exports.audits = audits;
