"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Applicationcreation = void 0;
var protractor_1 = require("protractor");
var Applicationcreation = /** @class */ (function () {
    function Applicationcreation() {
        this.application = protractor_1.element.all(protractor_1.by.css("div[class='mat-tab-label-content']")).get(0);
        this.addconnection = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'add_circle')]"));
        this.appname = protractor_1.element(protractor_1.by.css("input[formcontrolname='applicationName']"));
        this.Appdesc = protractor_1.element(protractor_1.by.css("input[formcontrolname='applicationDescription']"));
        this.Tag = protractor_1.element(protractor_1.by.css("input[autocomplete='off']"));
        this.next = protractor_1.element.all(protractor_1.by.xpath("//*[contains(text(),'Next')]")).get(0);
        // connection tab for IA 
        this.connectiontype = protractor_1.element.all(protractor_1.by.css("div[class*='mat-select-arrow']")).get(0);
        this.connectionoption1 = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'InfoArchive')]"));
        this.Connectionoption2 = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'RDBMS')]"));
        this.connectionprofile = protractor_1.element.all(protractor_1.by.css("div[class*='mat-select-arrow']")).get(3);
        this.profileoption1 = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),' IA_testconnection')]"));
        //  connection for RDBMS - mysql connection profile 
        this.profileoption2 = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'MYSQL_PROFILE')]"));
        this.tenantlist = protractor_1.element.all(protractor_1.by.css("div[class*='mat-select-arrow']")).get(4);
        this.tenantoption1 = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),' INFOARCHIVE')]"));
        this.schemas = protractor_1.element.all(protractor_1.by.css("div[class*='mat-select-arrow']")).get(4);
        this.selectschema = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),' p360v2')]"));
        // application for IA
        this.applicationlist = protractor_1.element.all(protractor_1.by.css("div[class*='mat-select-arrow']")).get(6);
        this.applicationoption = protractor_1.element(protractor_1.by.css("input[placeholder='Find IA Application']"));
        this.selectapp = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),' IA_APP')]"));
        //  this.selectappoption=element
        this.create = protractor_1.element.all(protractor_1.by.xpath("//*[contains(text(),'Create')]")).get(1);
    }
    return Applicationcreation;
}());
exports.Applicationcreation = Applicationcreation;
