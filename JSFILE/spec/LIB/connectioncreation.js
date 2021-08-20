"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createconnect = void 0;
var protractor_1 = require("protractor");
var createconnect = /** @class */ (function () {
    function createconnect() {
        this.developerscreen = protractor_1.element(protractor_1.by.xpath("//*[@id='header']/div/div/span[4]/mat-icon"));
        this.connections = protractor_1.element.all(protractor_1.by.css("div[class='mat-tab-label-content']")).get(1);
        this.addconnection = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'add_circle')]"));
        // drop down selection for IA and RDBMS 
        this.connectiontype = protractor_1.element.all(protractor_1.by.css("div[class*='mat-select-arrow']")).get(1);
        this.connectionoption1 = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'InfoArchive')]"));
        this.connectionoption2 = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'RDBMS')]"));
        // Rdbms type 
        this.RDBMStype = protractor_1.element.all(protractor_1.by.css("div[class*='mat-select-arrow']")).get(2);
        this.RDBMStype1 = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'MySQL')]"));
        this.RDBMStype2 = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),' PostgreSQL')]"));
        // enter the values 
        this.profilename = protractor_1.element(protractor_1.by.css("input[formcontrolname='profileName']"));
        this.connectiondescritption = protractor_1.element(protractor_1.by.css("input[formcontrolname='connectionDescription']"));
        this.next = protractor_1.element.all(protractor_1.by.xpath("//*[contains(text(),'Next')]")).get(0);
        this.region = protractor_1.element.all(protractor_1.by.css("div[class*='mat-select-arrow']")).get(4);
        this.regdev = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'DEV')]"));
        this.regtest = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'TEST')]"));
        this.regstage = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'STAGE ')]"));
        this.regprod = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'PROD')]"));
        this.regother = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'other')]"));
        this.protocol = protractor_1.element.all(protractor_1.by.css("div[class*='mat-select-arrow']")).get(4);
        this.http = protractor_1.element.all(protractor_1.by.xpath("//*[contains(text(),'http')]")).get(2);
        this.https = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'https')]"));
        this.serverhost = protractor_1.element(protractor_1.by.css("input[formcontrolname='serverGatewayIp']"));
        this.serverport = protractor_1.element(protractor_1.by.css("input[formcontrolname='serverPort']"));
        this.restserverhost = protractor_1.element(protractor_1.by.css("input[formcontrolname='serverRestIp']"));
        this.restapi = protractor_1.element(protractor_1.by.css("input[formcontrolname='serverRestPort']"));
        this.username = protractor_1.element(protractor_1.by.css("input[formcontrolname='username']"));
        this.password = protractor_1.element(protractor_1.by.css("input[formcontrolname='password']"));
        this.clientid = protractor_1.element(protractor_1.by.css("input[formcontrolname='clientId']"));
        this.clientscret = protractor_1.element(protractor_1.by.css("input[formcontrolname='clientSecret']"));
        //Dbname 
        this.dbname = protractor_1.element(protractor_1.by.css("input[formcontrolname='databaseName']"));
        this.Testconnetion = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Test Connection ')]"));
        this.create = protractor_1.element.all(protractor_1.by.xpath("//*[contains(text(),'Create')]")).get(1);
        this.update = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Update')]"));
        this.popuptestcon = protractor_1.element(protractor_1.by.xpath("//*[contains(text(), 'Connection successful')]"));
        this.Searchconnection = protractor_1.element(protractor_1.by.css("input[type='search']"));
    }
    return createconnect;
}());
exports.createconnect = createconnect;
